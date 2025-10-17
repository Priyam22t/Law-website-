import React, { useState } from 'react';
import "../component/c.css";
import { testimonialsdata } from "../../public/testimonialsdata";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import Navbar from '../component/navbar';
import Pricing from '../component/pricing';
import Footer from '../component/footer';
import list1 from "../../public/list1.json";


function Consult({ key }) {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsdata.length;

  return (
    <>
        <Navbar /><br></br><br></br><br></br><br></br>
        <div className="testimonials">
          <div className="leftt">
            
            <span className="ml - 100 font-bold text-blue-600 hover:text-blue-900">Rating : 9/10</span>
            
            <span className="font-bold text-blue-600 hover:text-blue-900">saul</span>
            <span className="font-bold text-blue-800 text-2xl">Goodmn</span>
          
            <span>{list1[selected].title}</span>
          </div>
          
          <div className="rightt">
            <div></div>
            <div></div>
            <img src={list1[0].image} alt="" />
          </div>
        </div>
        <Pricing />
        <Footer />
    </>
  );
}

export default Consult;
