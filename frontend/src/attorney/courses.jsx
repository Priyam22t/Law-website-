import React from 'react'
import Navbar from "../component/navbar";
import Attorney from"../component/attorney";
import Footer from"../component/footer";

function courses() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Attorney/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default courses
