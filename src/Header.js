import React from "react";

function Header({owners, onChangeSelectedOwner, selectedOwner, onChangeFormData, empty}) {
  const options = owners.map((owner) => (<Option option={owner} key={owner.id}/>))

  function Option({option}){
      return <option value={option.id}>{option.name}</option>
  }

  function handleChange(e){
    onChangeSelectedOwner(e.target.value)
    onChangeFormData({...empty, owner_id:parseInt(e.target.value)})
  }

  return (
    <div>
        <h1>Welcome to fruit shop!</h1>
        <label>
            Choose which shop of owners below you want to go to?
            <select
                placeholder="owners"
                onChange={e=>handleChange(e)}
                value={selectedOwner}
            >
            <option value="All">All</option>
            {options}
            </select>
        </label>
    </div>
  );
}

export default Header;