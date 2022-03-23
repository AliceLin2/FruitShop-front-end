import React from "react";
import Fruit from "./Fruit"

function FruitList({fruits, onChangeFruit, search}) {
    function handleDeleteFruit(id) {
        const updatedFruits = fruits.filter((fruit) => fruit.id !== id)
        onChangeFruit(updatedFruits)
    }

    function handleUpdateFruit(updatedFruit) {
        const updatedFruits = fruits.map((fruit) => {
            if (fruit.id === updatedFruit.id) {
            return updatedFruit;
            } else {
            return fruit;
            }
        });
        onChangeFruit(updatedFruits)
    }

    const showFruits = fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        showFruits.map((f) => (<Fruit fruit={f} key={f.id} onUpdateFruit={handleUpdateFruit} onDeleteFruit={handleDeleteFruit}/>))
    );
}

export default FruitList;