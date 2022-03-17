import React, { useEffect, useState } from "react";
import Search from "./Search";
import FruitList from "./FruitList";
import NewFruitForm from "./NewFruitForm";

function App() {
  const [fruits, setFruits] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/fruits")
      .then((r) => r.json())
      .then((fruits) => setFruits(fruits));
  }, []);

  function handleAddFruit(newFruit) {
    setFruits([...fruits, newFruit]);
  }

  function handleDeleteFruit(id) {
    const updatedFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(updatedFruits);
  }

  function handleUpdateFruit(updatedFruitObj) {
    const updatedFruits = fruits.map((fruit) => {
      if (fruit.id === updatedFruitObj.id) {
        return updatedFruitObj;
      } else {
        return fruit;
      }
    });
    setFruits(updatedFruits);
  }

  const displayedFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <header><h1>FruitShop</h1></header>
      <Search search={search} onSearchChange={setSearch} />
      <NewFruitForm onFruitAdd={handleAddFruit}/>
      <FruitList
        fruits={displayedFruits}
        onFruitDelete={handleDeleteFruit}
        onUpdateFruit={handleUpdateFruit}
      />
    </main>
  );
}

export default App;
