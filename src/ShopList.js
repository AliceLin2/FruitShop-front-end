import React from "react";
import {useParams, useHistory} from "react-router-dom"
import FruitForm from "./FruitForm";
import FruitList from "./FruitList";
import background from "./images/Peach.png"

function ShopList({search, fruits, onChangeFruit}) {
  const {ownerId} = useParams()
  const history = useHistory() 

  function handleAddFruit(newFruit) {
    onChangeFruit([...fruits, newFruit])
  }
  console.log(ownerId)
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
   <div style={{backgroundImage: `url(${background})`}}>
      <FruitForm onAddFruit={handleAddFruit} ownerId={ownerId}/>
      <FruitList
        fruits={displayFruits}
        onChangeFruit={onChangeFruit}
      />
    </div>
  );
}

export default ShopList;
