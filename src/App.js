import React, { useEffect, useState } from "react";
import Search from "./Search";
import FruitList from "./FruitList";
import Header from "./Header";
import FruitForm from "./FruitForm";

function App() {
  const [fruits, setFruits] = useState([]);
  const [owners, setOwners] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState("All");
  const [search, setSearch] = useState("");
  const empty = {
    name: "",
    price: 0,
    stock: 0,
    health_benefit: "",
    owner_id: selectedOwner
  }
  const [formData, setFormData] = useState(empty)

  useEffect(() => {
    fetch("http://localhost:9292/owners")
      .then((r) => r.json())
      .then((owners) => setOwners(owners));
  }, []);

  useEffect(() => {
    if(selectedOwner == "All"){
      fetch("http://localhost:9292/fruits")
      .then((r) => r.json())
      .then((fruits) => setFruits(fruits))
    }else{
      fetch(`http://localhost:9292/${selectedOwner}/fruits`)
      .then((r) => r.json())
      .then((fruits) => setFruits(fruits))
    }
  }, [selectedOwner]);

  function handleAddFruit(newFruit) {
    setFruits([...fruits, newFruit])
    setFormData(empty)
  }

  function handleDeleteFruit(id) {
    const updatedFruits = fruits.filter((fruit) => fruit.id !== id)
    setFruits(updatedFruits)
  }

  function handleUpdateFruit(updatedFruit) {
    const updatedFruits = fruits.map((fruit) => {
      if (fruit.id === updatedFruit.id) {
        return updatedFruit;
      } else {
        return fruit;
      }
    });
    setFruits(updatedFruits)
    setFormData(empty)
  }

  const showFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <main>
      <Header 
        owners={owners} 
        onChangeSelectedOwner={setSelectedOwner} 
        selectedOwner={selectedOwner} 
        onChangeFormData={setFormData}
        empty={empty}
      />
      <Search search={search} onSearch={setSearch}/>
      {selectedOwner==="All"
        ? ""
        :
        <FruitForm 
          onAddFruit={handleAddFruit} 
          onUpdateFruit={handleUpdateFruit} 
          formData={formData}
          onChangeFormData={setFormData}
        />}
      <FruitList
        fruits={showFruits}
        onDeleteFruit={handleDeleteFruit}
        onChangeFormData={setFormData}
        onChangeSelectedOwner={setSelectedOwner}
      />
    </main>
  );
}

export default App;
