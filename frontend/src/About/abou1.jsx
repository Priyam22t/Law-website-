import React from 'react'
import Navbar from "../component/navbar";
import About from"../component/about";
import Footer from"../component/footer";
import  "./ok.css";

function abou1() {
  return (
    <div>
      <Navbar/>
    <div className='min-h-screen'>
    <About/>
    </div>
    <Footer/>
    </div>
  )
}

export default abou1;
