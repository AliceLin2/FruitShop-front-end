import React, {useState} from "react";

function NewFruitForm({onAddFruit}) {
  const [formData, setFormData] = useState({
      name: "",
      price: 10,
      stock: 100,
      health_benefit: ""
  })
  
  function handleChange(e){
      const key = e.target.name
      const value = e.target.value
      setFormData({
          ...formData,
          [key]:value
      })
  }
  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      name,
      price,
      stock,
      health_benefit
    }
    onAddFruit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
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

      <button type="submit">Add to List</button>
    </form>
  );
}

export default NewFruitForm;