import React, { useState } from 'react';
import "./c.css";
import { testimonialsdata } from "../../public/testimonialsdata";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";

function c() {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsdata.length;

  return (
    <div className="testimonials">
      <div className="leftt">
      <span class=" ml - 100 font-bold text-blue-600 hover:text-blue-900  ">Testimonials</span>
    <span class="font-bold text-blue-600  hover:text-blue-900 ">What they</span>
    <span class="font-bold text-blue-800 text-2xl">Say About us</span>
        <span>{testimonialsdata[selected].w_description}</span>
        <span>
          <span className='name'>
            {testimonialsdata[selected].w_name}
          </span>{""}
          -{testimonialsdata[selected].w_status}
        </span>
      </div>
      <div className="rightt">
        <div></div>
        <div></div>
        <img src={testimonialsdata[selected].w_img} alt="" />
        <div className="arrows">
         
          <img  onClick={()=>{
            selected===0?setSelected(tlength-1)
           : setSelected((prev)=>prev-1)
          }} src={leftarrow} alt="" />
          <img  onClick={()=>{
            selected===tlength-1?setSelected(0)
           : setSelected((prev)=>prev+1);

          }}
          src={rightarrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default c;