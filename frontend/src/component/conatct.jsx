import React, { useState } from 'react';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';

import contact from "../../public/contact.json";
import Lottie from "lottie-react"

function Contact() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [msg,setMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault(); 
    console.log("flag1")
    axios.post("http://localhost:8080/contact",{name,email,phone,msg})
    .then((res)=>{
      if(res.data === "success"){
        alert("We got you! Will reach you shortly!")
      }
      else{
        alert("Can't send your feedback! Come back later!")
      }
    })
  }

  return (
    <div className='container mx-auto px-4 py-16'>
 
      <div className='ml-20 mt-6 flex justify-between items-start'>
  <div className='w-full lg:w-1/3 p-8 bg-gray-800 text-white rounded-l-lg shadow-xl'>
    <h2 className='text-2xl font-bold mb-4'>Send a Message</h2>
    <form className='flex flex-col space-y-4'>
      <input onChange={(e)=>setName(e.target.value)} className='p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all' type='text' placeholder='Name' />
      <input onChange={(e)=>setEmail(e.target.value)}className='p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all' type='email' placeholder='Email' />
      <input maxLength="10" onChange={(e)=>setPhone(e.target.value)}className='p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all' type='tel' placeholder='Phone' />
      <textarea onChange={(e)=>setMsg(e.target.value)} className='p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all' placeholder='Message'></textarea>
      <button onClick={(e) => handleSend(e)} className='p-2 bg-gradient-to-r from-red-600 to-red-700 rounded hover:from-red-700 hover:to-red-800 transition-all'>Send</button>
    </form>
    <div className='lottie-container  ml-12 w-full  mt-2 md:w-3/4 mb-8'>
        <Lottie loop={true} animationData={contact} />
      </div>
        </div>
        

        <div className='w-full lg:w-2/3 p-8 bg-gray-900 text-white'>
          <div className='rounded-r-lg'>
            <h2 className='text-2xl font-bold mb-4'>Contact Info</h2>
            <div className='flex items-center mb-4 group'>
  <FaMapMarkerAlt className='text-2xl  text-gray-400 group-hover:text-gray-800  transition-transform transform group-hover:scale-110 mr-2' />
  <span className='group-hover:text-indigo-700 transition-colors'>SRM universirty , Vijayawada </span>
</div>
<div className='flex items-center mb-4 group'>
  <FaPhone className='text-2xl  text-gray-400 group-hover:text-gray-800  transition-transform tr\ansform group-hover:scale-110 mr-2' />
  <span className='group-hover:text-indigo-700 transition-colors'>+91 721 762 1854</span>
</div>
<div className='flex items-center mb-4 group'>
  <FaEnvelope className='text-2xl text-gray-400 group-hover:text-gray-800 transition-transform transform group-hover:scale-110 mr-2' />
  <span className='group-hover:text-indigo-700 transition-colors'>kotnala_priyam@gmail.com</span>
</div>

            <div className='flex mb-4'>
  <TiSocialFacebook className='text-4xl text-white hover:text-blue-800 transition-transform transform hover:scale-125 mr-2' />
  <TiSocialTwitter className='text-4xl  text-white hover:text-blue-500 transition-transform transform hover:scale-125 mr-2' />
  <TiSocialInstagram className='text-4xl  text-white hover:text-pink-800 transition-transform transform hover:scale-125 mr-2' />
  <TiSocialLinkedin className='text-4xl  text-white hover:text-blue-900 transition-transform transform hover:scale-125 mr-2' />
  <TiSocialYoutube className='text-4xl  text-white hover:text-red-800 transition-transform transform hover:scale-125' />
</div>
          </div>
          {/* Separate Box for Google Maps */}
          <div className='mt-8 bg-white p-4 rounded-lg shadow-lg'>
          <iframe title='Google Maps' width='100%' height='300' style={{ border: 0 }}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.2095239021487!2d80.50574867485108!3d16.46492502872398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f253b87d44b3%3A0x591c2967f32abc19!2sSRM%20University%20AP!5e0!3m2!1sen!2sin!4v1714195970167!5m2!1sen!2sin'
        allowFullScreen='' aria-hidden='false' tabIndex='0'></iframe>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
