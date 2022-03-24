import React from "react";
import Fruit from "./Fruit"

function FruitList({fruits, onUpdateFruit, onDeleteFruit}) {

    return (
        fruits.map((f) => 
            (<Fruit 
                fruit={f} 
                key={f.id} 
                onUpdateFruit={onUpdateFruit} 
                onDeleteFruit={onDeleteFruit}
            />))
    );
}

export default FruitList;