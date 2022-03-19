import React from "react";

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
                <p>Price: {fruit.price}</p>
                <p>Stock: {fruit.stock}</p>
                <p>Health_benefit: {fruit.health_benefit}</p> 
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