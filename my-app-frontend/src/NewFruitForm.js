import React, {useState} from "react";

function NewFruitForm({onFruitAdd}) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  
  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      name,
      price
    }
    onFruitAdd(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={e=>setName(e.target.value)}/>
      </label>

      <label>
        Price:
        <input type="text" name="price" onChange={e=>setPrice(e.target.value)}/>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default NewFruitForm;