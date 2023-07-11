import React from 'react'
import profile1 from "./profile-1.jpeg"
import profile2 from "./profile-3.jpeg"
// import profile3 from "./profile-4.jpeg"
import profile6 from "./profile-6.jpeg"
import "./Review.css"
export default function Review() {
  return (
    <div>
        <div className='Wrapper'>
          <div className='Card'>
             <img src={profile1}></img>
            <div>
            <p>"Delicious pizza, friendly staff, quick service. I'll definitely be back!"</p>
             <h2>John Doe</h2>
            </div>
          </div>

          <div className='Card'>
             <img id='img2' src={profile2}></img>
            <div>
            <p>"Mouthwatering pizzas, excellent service, highly recommended for pizza lovers!"</p>
             <h2>Sophia Anderson</h2>
            </div>
          </div>
          
          <div className='Card'>
             <img id='img3' src={profile6}></img>
            <div>
            <p>"Delicious flavors, prompt delivery, satisfied cravings. Highly recommend this pizza place!"</p>
             <h2>Ethan Thompson</h2>
            </div>
          </div>


        </div>
    </div>
  )
}
