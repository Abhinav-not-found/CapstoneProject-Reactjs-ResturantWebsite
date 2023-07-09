import React from 'react'
import "./Order.css"
export default function Contact() {
  return (
    <div>
        <h1>Order Now @0000-0000</h1>
        <form id='form'>
          <label>Name</label>
          <input placeholder='Name'></input>
          <label>Address</label>
          <input type='text' placeholder='address'></input>
          <label>Phone:</label>
          <input type='text' placeholder='phone no'></input>
          <label>Message</label>
          <textarea placeholder='Food items?'></textarea>
        </form>
    </div>
  )
}
