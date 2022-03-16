import React from "react";
const style = {
  display: "inline-block",
  width: "500px",
  padding: "20px",
  margin: "0 10px 10px",
  color: "black",
  fontSize: "20px"
};

function Fruit({fruit, onSelectFruit}) {
    return (
        <div style={style}>
            <br />
            <h4>{fruit.title}</h4>
            <img src={fruit.image} onClick={e=>onSelectFruit(fruit.id)} alt="" />
        </div>
    );
}

export default Fruit;