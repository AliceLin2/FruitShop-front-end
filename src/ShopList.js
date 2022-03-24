import React from "react";
import {useParams} from "react-router-dom"
import NewFruit from "./NewFruit";
import FruitList from "./FruitList";

function ShopList({search, fruits, onChangeFruits}) {
  const {ownerId} = useParams()

  function handleAddFruit(newFruit) {
    onChangeFruits([...fruits, newFruit])
  }

  function handleDeleteFruit(id) {
    const updatedFruits = fruits.filter((fruit) => fruit.id !== id)
    onChangeFruits(updatedFruits)
  }

  function handleUpdateFruit(updatedFruit) {
      const updatedFruits = fruits.map((fruit) => {
          if (fruit.id === updatedFruit.id) {
          return updatedFruit;
          } else {
          return fruit;
          }
      });
      onChangeFruits(updatedFruits)
  }

  const displayFruits = fruits
  .filter((fruit) => {
    if(ownerId===undefined){
      return fruit
    }else{
      return fruit.owner_id === parseInt(ownerId)
    }
  })
  .filter((fruit) => fruit.name.toLowerCase().includes(search.toLowerCase()))

  return (
   <div>
      {ownerId===undefined?"":<NewFruit onAddFruit={handleAddFruit} ownerId={ownerId}/>}
      <FruitList
        fruits={displayFruits}
        onUpdateFruit={handleUpdateFruit}
        onDeleteFruit={handleDeleteFruit}
      />
    </div>
  );
}

export default ShopList;
