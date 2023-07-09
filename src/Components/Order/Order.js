import React from 'react'
import "./Order.css"

export default function Contact() {
  return (
    <div>
       
        <div className='outer'>
        <h1 >Order Now ph:9999-9999</h1>
      
        <form id='form'>
          <label>Name:</label>
          <input id='name-inp' placeholder='eg. Jacob Brown'></input>
          <label id='address'>Address:</label>
          <input id='add-inp' type='text' placeholder='eg. 5th street building 2 room no 34'></input>
          <label id='phone'>Phone:</label>
          <input id='ph-inp' type='text' placeholder='eg. 9999-9999'></input>
          <label id='food-item'>Food Items:</label>
          <textarea id='text-inp' placeholder='Name, quantity (eg. Cheese pizza, 1)'></textarea>
          <button id='btn'>Place Order</button>
        </form>
        </div>
    </div>
  )
}
