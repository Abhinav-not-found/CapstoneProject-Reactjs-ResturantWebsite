import React from 'react'
import "./Home.css"
import pizza from "./Images/pizza3.png"
import ImageCarousel from "./ImageCarousel"

export default function Home() {
  return (
    <div>

      <div id='wrapper'>
        <div id='heading'>
            <h1>IT'S <span id='slice'>SLICE</span><br/>
            TO MEET <span id='you'>YOU!</span></h1>
        </div>
        <div id='img-text'>
        <p>Try our<span id='special'> Special Pizza </span><br/>
          just <span id='price'>@ 499 </span></p>
        </div>
        <div id='pizza'>
            <img src={pizza}/>
        </div>
      </div>
        <ImageCarousel></ImageCarousel>
      

    </div>
  )
}
