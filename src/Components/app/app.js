import React from 'react'
import Home from '../Home/Home'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Order from '../Order/Order'
import Footer from '../Footer/Footer'
import Dishes from '../Dishes/Dishes'
import Review from '../CustomerReview/Review'

export default function app() {
  return (
    <div>
     
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/review' element={<Review/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  )
}
