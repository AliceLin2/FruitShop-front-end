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
    function handleUpdate(){
        if(editMode===false){
          setEditMode(!editMode)
        }else{
            fetch(`http://localhost:3000/food/${match.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    ...match,
                    rating: newRating
                })
            })
            .then(r=>r.json())
            .then(data=>{
                setEditMode(!editMode)
                onFetchFood()
            })
        }
    }
  
    function handleDelete(){
      fetch(`http://localhost:3000/food/${match.id}`,{
          method:"DELETE"
      })
      .then(r=>r.json())
      .then(data=>{
          history.push("/myfoodportfolio")
          onFetchFood()
      })
    } 
    function Fruit({fruit}) {
        return (
            <div style={style}>
                <br />
                {editMode?
                    <div>
                        <h2>{fruit.name}</h2>
                        <p>Price: {fruit.price}</p>
                        <p>Stock: {fruit.stock}</p>
                        <p>Health_benefit: {fruit.health_benefit}</p>
                    </div>
                    :
                    <div>
                        <h2>{fruit.name}</h2>
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>
                }

                <button id='update' onClick={e=>handleUpdate(fruit.id)}>{editMode?"save":"update"}</button> 
                <button id='delete' onClick={e=>handleDelete(fruit.id)}>delete</button>        
            </div>
        );
    }

    return (
        fruits.map((f) => (<Fruit fruit={f} key={f.id}/>))
    );
}

export default FruitList;