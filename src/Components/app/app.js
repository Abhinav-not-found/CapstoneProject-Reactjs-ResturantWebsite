import React from 'react'
import Home from '../Home/Home'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Contact from '../Contacts/Contact'
import Footer from '../Footer/Footer'
export default function app() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  )
}
