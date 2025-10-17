import React from 'react'
import Navbar from "../component/navbar";
import Conatct from"../component/conatct";
import Footer from"../component/footer";
function contact1() {
  return (
    <div>
    <Navbar/>
    <div className='min-h-screen'>
    <Conatct/>
    </div>
    <Footer/>
    
  </div>
  )
}

export default contact1