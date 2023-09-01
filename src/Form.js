import React, { useState } from 'react'

export default function Form(props) {

    


      
     const [newItem , setNewItem]= useState('')
      
     function handleSubmit(e) {

    e.preventDefault();
  
    if (newItem ==="") return
    
    props.onSubmit(newItem)
  
    setNewItem('')
  }
  return (
    
          
    <form onSubmit={handleSubmit} className="new-item-form">
 
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input id="item" type="text"
      value={newItem} onChange={ e => setNewItem(e.target.value)}/>


    </div>

    <button className="btn">Add</button>

  </form>
  )
}
