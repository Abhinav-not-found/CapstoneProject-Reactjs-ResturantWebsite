import React from 'react'
import "./Home.css"
import pizza from "./Images/pizza3.png"
import ImageCarousel from "./ImageCarousel"
import pizza_video from "./pizza_video.mp4"
import { Fade } from 'react-reveal'

export default function Home() {
  return (
    <div>

      <div id='wrapper'>
          <Fade left>
        <div id='heading'>
            <h1>IT'S <span id='slice'>SLICE</span><br/>
            TO MEET <span id='you'>YOU!</span></h1>
            <div id='img-text'>
            <p>Try our<span id='special'> Special Pizza </span>
            just <span id='price'>@ 499 </span></p>
             </div>
        </div>
          </Fade>
        <Fade right>
        <div id='pizza'>
            <img src={pizza}/>
        </div>
        </Fade>
        
      </div>
      <Fade duration={9000}>
        <ImageCarousel></ImageCarousel>

      </Fade>
      <video autoPlay loop muted playsInline className='background-clip' src={pizza_video} type='video/mp4'>
      
          
        </video>

    </div>
  )
}
