import React, {useState} from "react";

function UpdateFruit({fruit, onUpdateFruit}) {
  const [formData, setFormData]=useState(fruit)

  function handleChange(e){
      const key = e.target.name
      const value = (key === "stock" || key === "price") ? parseInt(e.target.value): e.target.value
      setFormData({
        ...formData,
        [key]:value
      })
  }
  console.log(formData)
  function handleSubmit(e){
      e.preventDefault()
      fetch(`http://localhost:9292/fruits/${fruit.id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      .then(r=>r.json())
      .then(data=>{
          onUpdateFruit(formData)
      })
  }

  return (
    <form className="UpdateItem" onSubmit={handleSubmit}>
      <br></br>
      <h3>Update The Fruit</h3>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>
      <label>
        Price:
        <input type="text" name="price" value={formData.price} onChange={handleChange}/>
      </label>
      <label>
        Stock:
        <input type="text" name="stock" value={formData.stock} onChange={handleChange}/>
      </label>
      <label>
        Health benefit:
        <textarea type="text" name="health_benefit" value={formData.health_benefit} onChange={handleChange}/>
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default UpdateFruit;