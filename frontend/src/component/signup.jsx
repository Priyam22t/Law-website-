import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleSignup = () => {
    alert(name + email + password);

    axios.post("http://localhost:8080/signup",{name,email,password})
    .then((res)=>{
      if(res.data === "exist") {
        alert("You already have a account! Please login!");
      }
      if(res.data === "added") {
        alert("Account created! Proceed to login");
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="modal-box max-w-md mx-auto">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg mb-4">SIGN UP</h3>
            <div className='mb-3 space-y-2'>
              <span>Name</span><br />
              <input 
                onChange={(e)=>setName(e.target.value)}
                type="text" 
                placeholder='Enter your name' 
                className='w-full px-3 py-1 border rounded-md outline-none' 
              />
              {errors.name && <span className="text-red-500 mt-2 block">{errors.name.message}</span>}
            </div>
            <div className='mb-3 space-y-2'>
              <span>Email</span><br />
              <input 
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                placeholder='Enter your email' 
                className='w-full px-3 py-1 border rounded-md outline-none' 
                
              />
              {errors.email && <span className="text-red-500 mt-2 block">{errors.email.message}</span>}
            </div>
            <div className='mb-6'>
              <span>Password</span><br />
              <input
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                placeholder='Enter your password' 
                className='w-full px-3 py-1 border rounded-md outline-none' 
                
              />
              {errors.password && <span className="text-red-500 mt-2 block">{errors.password.message}</span>}
            </div>
            <div className='flex flex-col items-center text-xl'>
              <button onClick={handleSignup} type="submit" className='bg-pink-500 text-white w-full rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mb-4'>SIGN UP</button>
              <p>Already registered?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">LOGIN</Link>
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
