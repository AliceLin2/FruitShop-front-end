import React from "react";

function FruitForm({formData, onChangeFormData, onAddFruit, onUpdateFruit}) {
  function handleChange(e){
      const key = e.target.name
      const value = e.target.value
      onChangeFormData({
        ...formData,
        [key]:value
      })
  }

  function handleSubmit(e){
    e.preventDefault()
    if(formData.id===undefined){
      fetch('http://localhost:9292/fruits',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      .then(r=>r.json())
      .then(data=>{
          onAddFruit(data)
      })
    }else{
      fetch(`http://localhost:9292/fruits/${formData.id}`,{
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
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <h3>Add new Fruit</h3>
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

export default FruitForm;