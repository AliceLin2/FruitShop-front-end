import React from "react";
import Fruit from "./Fruit"

function FruitList({fruit, searchTerm, onSelectFruit}) {
    function allFruit() {
        if (!!searchTerm) {
            return fruit.map((f) => {
                if (f.title.toLowerCase().includes(searchTerm)) {
                    return <Fruit fruit={f} key={f.id} onSelectFruit={onSelectFruit}/>;
                } 
            });
        }
        return fruit.map((f) => (
            <Fruit fruit={f} key={f.id} onSelectFruit={onSelectFruit}/>
        ));
    }

    return (
        <div>
            {allFruit()}
        </div>
    );
}

export default FruitList;