import React from "react";
import Fruit from "./Fruit"
const style = {
    display: "inline-block",
    width: "500px",
    padding: "20px",
    margin: "0 10px 10px",
    color: "black",
    fontSize: "20px"
};
function FruitList({fruits, onDeleteFruit, onUpdateFruit}) {
    function Fruit({fruit}) {
        return (
            <div style={style}>
                <br />
                <h2>{fruit.name}</h2>
                <p>price: {fruit.price}</p>
                <p>stock: {fruit.stock}</p>
                <p>health_benefit: {fruit.health_benefit}</p> 
                <button id='update' onclick={onUpdateFruit}>update</button> 
                <button id='delete' onclick={onDeleteFruit}>delete</button>        
            </div>
        );
    }

    return (
        fruits.map((f) => (<Fruit fruit={f} key={f.id}/>))
    );
}

export default FruitList;