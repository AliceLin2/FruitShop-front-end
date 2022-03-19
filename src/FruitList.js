import React, {useState} from "react";

const style = {
    display: "inline-block",
    width: "500px",
    padding: "20px",
    margin: "0 10px 10px",
    color: "black",
    fontSize: "20px"
};
function FruitList({fruits, onDeleteFruit, onUpdateFruit}) {
    const [editMode, setEditMode] = useState(false)
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()
    const [healthBenefit, setHealthBenefit] = useState()

    function handleUpdate(fruit){
        if(editMode===false){
          setEditMode(!editMode)
        }else{
            fetch(`http://localhost:9292/fruits/${fruit.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    ...fruit,
                    price,
                    stock,
                    health_benefit: healthBenefit
                })
            })
            .then(r=>r.json())
            .then(data=>{
                setEditMode(!editMode)
                onUpdateFruit(data)
                console.log(data)
            })
        }
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
    function Fruit({fruit}) {
        return (
            <div style={style}>
                <br />
                {editMode?
                    <div>
                        <h2>{fruit.name}</h2>        
                        <input type="text" placeholder="price" name="price" value={price} onChange={setPrice}/>
                        <input type="text" placeholder="stock" name="stock" value={stock} onChange={setStock}/>
                        <textarea type="text" placeholder="health benefit" name="health_benefit" value={healthBenefit} onChange={setHealthBenefit}/>
                    </div>
                                :
                    <div>
                        <h2>{fruit.name}</h2>
                        <p>Price: {fruit.price}</p>
                        <p>Stock: {fruit.stock}</p>
                        <p>Health_benefit: {fruit.health_benefit}</p>
                    </div>
                }

                <button id='update' onClick={e=>handleUpdate(fruit)}>{editMode?"save":"update"}</button> 
                <button id='delete' onClick={e=>handleDelete(fruit.id)}>delete</button>        
            </div>
        );
    }

    return (
        fruits.map((f) => (<Fruit fruit={f} key={f.id}/>))
    );
}

export default FruitList;