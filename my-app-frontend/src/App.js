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

  function handleUpdateFruit(updatedFruit) {
    const updatedFruits = fruits.map((fruit) => {
      if (fruit.id === updatedFruit.id) {
        return updatedFruit;
      } else {
        return fruit;
      }
    });
    setFruits(updatedFruits);
  }

  const showFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <header>FruitShop</header>
      <Search search={search} onSearch={setSearch} />
      <NewFruitForm onAddFruit={handleAddFruit}/>
      <FruitList
        fruits={showFruits}
        onDeleteFruit={handleDeleteFruit}
        onUpdateFruit={handleUpdateFruit}
      />
    </main>
  );
}

export default App;
