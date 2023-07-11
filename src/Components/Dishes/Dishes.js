import React from 'react'
import './Dishes.css'
import pizza_type_1 from "./Images/pizza_type_1.jpeg"
import pizza_type_2 from "./Images/pizza_type_2.jpeg"
import pizza_type_3 from "./Images/pizza_type_3.jpeg"
import pizza_type_4 from "./Images/pizza_type_4.jpeg"
import pizza_type_5 from "./Images/pizza_type_5.jpeg"
import pizza_type_6 from "./Images/pizza_type_6.jpeg"
import pizza_type_7 from "./Images/pizza_type_7.jpeg"
import pizza_type_8 from "./Images/pizza_type_8.jpeg"
import pizza_type_9 from "./Images/pizza_type_9.jpeg"
import pizza_type_10 from "./Images/pizza_type_10.jpeg"
import pizza_type_11 from "./Images/pizza_type_11.jpeg"
import pizza_type_12 from "./Images/pizza_type_12.jpeg"
import pizza_type_13 from "./Images/pizza_type_13.jpeg"
import pizza_type_14 from "./Images/pizza_type_14.jpeg"
import pizza_type_15 from "./Images/pizza_type_15.jpeg"
import { Flip } from 'react-reveal'
import { Slide } from 'react-reveal'


export default function Dishes() {
  return (
    <div>
      <div id='outer'>
        
        <div id='wrapper1'>
          <Slide left>

            <h1 id='h1'>Country Special Pizza</h1>
          </Slide>
  
          <div id='cards'>
            <Flip>
                <div id='card'>
                  <img src={pizza_type_1}></img>
                  <h3>Italian<br/> Pizza</h3>
                  <p>Rs.699</p>
                </div>
            </Flip>
            <Flip delay={400}>
                <div id='card'>
                  <img src={pizza_type_2}></img>
                  <h3>Greek<br/> Pizza</h3>
                  <p>Rs.699</p>
                </div>
              </Flip> 
              <Flip delay={800}>
                <div id='card'>
                  <img src={pizza_type_3}></img>
                  <h3>Sicilian<br/> Pizza</h3>
                  <p>Rs.699</p>
                </div>
              </Flip> 
              <Flip delay={1200}>

                <div id='card'>
                  <img src={pizza_type_4}></img>
                  <h3>Roman<br/> Pizza</h3>
                  <p>Rs.699</p>
                </div>
              </Flip>
              <Flip delay={1600}>

                <div id='card'>
                  <img src={pizza_type_13}></img>
                  <h3>Indian<br/> Pizza</h3>
                  <p>Rs.699</p>
                </div>
              </Flip>
          </div>
        </div>
     



        <div id='wrapper2'>
          <Slide left>

          <h1>Basic Pizza</h1>
          </Slide>
          <div id='cards'>
            <Flip delay={400}>

                <div id='card'>
                  <img src={pizza_type_14}></img>
                  <h3>Cheese<br/> Pizza</h3>
                  <p>Rs.99</p>
                </div>
            </Flip>
            <Flip delay={800}>

                <div id='card'>
                  <img src={pizza_type_5}></img>
                  <h3>Onion<br/> Pizza</h3>
                  <p>Rs.99</p>
                </div>
            </Flip>
            <Flip delay={1200}>

                <div id='card'>
                  <img src={pizza_type_6}></img>
                  <h3>Tomato<br/> Pizza</h3>
                  <p>Rs.99</p>
                </div>
            </Flip>
            <Flip delay={1600}>

                <div id='card'>
                  <img src={pizza_type_7}></img>
                  <h3>Capsicum<br/> Pizza</h3>
                  <p>Rs.99</p>
                </div>
            </Flip>
            <Flip delay={2000}>

                <div id='card'>
                  <img src={pizza_type_8}></img>
                  <h3>Corn<br/> Pizza</h3>
                  <p>Rs.99</p>
                </div>
            </Flip>
          </div>
        </div>


        <div id='wrapper3'>
          <Slide left>

          <h1>Vegetarian Pizza</h1>
          </Slide>
          <div id='cards'>

                <div id='card'>
                  <img src={pizza_type_15}></img>
                  <h3>Dblcheese<br/> Pizza</h3>
                  <p>Rs.199</p>
                </div>
                <div id='card'>
                  <img src={pizza_type_9}></img>
                  <h3>Vegloaded<br/> Pizza</h3>
                  <p>Rs.199</p>
                </div>
                <div id='card'>
                  <img src={pizza_type_10}></img>
                  <h3>Mushroom<br/> Pizza</h3>
                  <p>Rs.199</p>
                </div>
                <div id='card'>
                  <img src={pizza_type_11}></img>
                  <h3>Paneer<br/> Pizza</h3>
                  <p>Rs.199</p>
                </div>
                <div id='card'>
                  <img src={pizza_type_12}></img>
                  <h3>Olive<br/> Pizza</h3>
                  <p>Rs.199</p>
                </div>
          </div>
        </div>





      </div>
    </div>
  )
}
