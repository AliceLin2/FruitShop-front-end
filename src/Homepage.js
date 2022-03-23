import React from "react";
import FruitList from "./FruitList";

function Homepage({owners, onChangeSelectedOwner, selectedOwner, onChangeFormData, empty}) {
  useEffect(() => {
    fetch("http://localhost:9292/fruits")
    .then((r) => r.json())
    .then((fruits) => setFruits(fruits))
  }, []);

  return (
    <div style={{backgroundColor:"lightblue"}}>
        <FruitList fruits={fruits}/>
    </div>
  );
}

export default Homepage;