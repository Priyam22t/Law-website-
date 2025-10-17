import React, { useState } from 'react'
import Animate from "../../public/animate.json";
import axios from 'axios';
import Lottie from "lottie-react"
function banner() {
  const [email,setEmail] = useState('');

  const handleClick = () => {

    axios.post("http://localhost:8080/subscribe",{email})
    .then((res)=>{
      console.log(res.data);
      if(res.data === "exist"){
        alert("Already Subscribed!!");
      }
      if(res.data === "added"){
        alert("Thank you for subscribing to us!!")
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  '>
    <div className='w-full md:w-1/2 '> <div className='space-y-12 md:mt-32'>   <h1 className='text-2xl font-bold'>"Discover expert legal guidance tailored to your needs at <span className='text-blue-500'> LegalVista</span>. Let us navigate the complexities of the law for you."</h1>
    <p className='text-xl font-semibold'><span className='text-pink-500'> Welcome to LegalVista</span> - Your Trusted Partner in Legal Matters. Explore our practice areas and meet our dedicated team of attorneys committed to serving your legal needs with expertise and compassion.</p>
    <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email" />
</label>
    </div>
    <button onClick={handleClick} className="mt-6 btn glass">SUBSCRIBE</button>
</div>
    <div className='w-full  mt-20 ml-35 '><Lottie loop={true} animationData={Animate} />
    </div>
    </div>
    </>
  )
}

export default banner
