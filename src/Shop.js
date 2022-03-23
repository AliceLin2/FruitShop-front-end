import React, { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom"
import FruitList from "./FruitList";
import background from "./images/Peach.png"

function Shop({search}) {
  const {ownerId} = useParams()
  const history = useHistory() 
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/owners/${ownerId}/fruits`)
    .then((r) => r.json())
    .then((fruits) => {
      console.log(fruits)
      setFruits(fruits)
    })
  },[ownerId])
  
  return (
   <div style={{backgroundImage: `url(${background})`}}>
      <FruitList
        fruits={fruits}
        onChangeFruit={setFruits}
        search={search}
      />
    </div>
  );
}

export default Shop;
