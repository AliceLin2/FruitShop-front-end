import React from "react";
const style = {
    display: "inline-block",
    width: "500px",
    padding: "20px",
    margin: "0 10px 10px",
    color: "black",
    fontSize: "20px",
};

function Fruit({fruit, onDeleteFruit, onChangeFormData, onChangeSelectedOwner}) {
    function handleUpdate(fruit){
        onChangeFormData(fruit)
        onChangeSelectedOwner(fruit.owner_id)
    }
    function handleDelete(id){
      fetch(`http://localhost:9292/fruits/${id}`,{
          method:"DELETE"
      })
      .then(r=>r.json())
      .then(data=>{
        onDeleteFruit(id)
      })
    } 
    return (
        <div style={style}>
            <br />
            <div>
                <h2>{fruit.name}</h2>
                <p>Price: {fruit.price}</p>
                <p>Stock: {fruit.stock}</p>
                <p>Health_benefit: {fruit.health_benefit}</p>
            </div>
            <button id='update' onClick={e=>handleUpdate(fruit)}>update</button> 
            <button id='delete' onClick={e=>handleDelete(fruit.id)}>delete</button>        
        </div>
    );
}

export default Fruit;