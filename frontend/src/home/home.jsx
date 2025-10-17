import React from 'react'
import Navbar from "../component/navbar";
import Banner from "../component/banner";
import Footer from "../component/footer";
import Freelawyer from "../component/freelawyer"; // Corrected the import statement
function home() {
  return (
   <>
    <Navbar/>
      <Banner/>
      <Freelawyer/> 
      <Footer/>
   </>
  )
}

export default home;
