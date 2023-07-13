import React from 'react'
import "./About.css"
// import { Roll } from 'react-reveal'
import { Bounce } from 'react-reveal'
export default function About() {
  return (
    <div>
      <div id='wrapper1'>
        <Bounce top>

          <h3 id='quote'>"Crafting happiness, one slice at a time."<br/><span>-SLICE</span></h3>
        </Bounce>
          <Bounce bottom>

          <p id='paragraph'>Welcome to Slice Pizza Company, where every bite tells a delicious story. With a passion 
            for crafting exceptional pizzas, we source the finest ingredients to ensure each slice bursts 
            with flavor. Our menu offers classic combinations and unique gourmet creations to satisfy every 
            craving. Handcrafted by skilled artisans, our pizzas are masterpieces that cater to all preferences, 
            including gluten-free options. Exceptional service and community involvement are at the heart of our 
            values. Join us for a memorable experience, where you can indulge in the joy of a perfect slice. At 
            Slice Pizza Company, we're dedicated to crafting happiness, one bite at a time.</p>
          </Bounce>
      </div>
      
    </div>
  )
}
