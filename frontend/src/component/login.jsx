import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate  = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email,setEmail] = useState('');
  const [passwd,setPasswd] = useState('');

  const handleLogin = () => {
    if(email.length > 0 && passwd.length > 0){
      axios.post("http://localhost:8080/login",{email,passwd})
      .then((res)=>{
        if(res.data === "loggedin"){
          alert("Log In successfull!!");
          localStorage.setItem("status","true");
          navigate('/');
        }
        else{
          alert("Your account doesn't exist!!")
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else{
      alert("Please enter your email and password!!");
    }
  }


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            {/* Close button */}
            <Link onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Hello User!</h3>
            <p>Login to consult our world's best lawyers!!</p><br></br>
            <div>
              <span>Email</span><br />
              <input 
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                placeholder='Enter your email' 
                className='w-80 px-3 py-1 border rounded-md outline-none' 
                required
              />
              {errors.email && <span className="text-red-500 mt-2 block">{errors.email.message}</span>}
              <br /><br></br>
            </div>
            <div>
              <span>Password</span><br />
              <input 
                onChange={(e)=>setPasswd(e.target.value)}
                type="password" 
                placeholder='Enter your password' 
                className='w-80 px-3 py-1 border rounded-md outline-none'  
                required
              />
              <br /><br></br>
              {errors.password && <span className="text-red-500 mt-2 block">{errors.password.message}</span>}
            </div>
            <div className='inline justify-around'>
              <p>Not registered?{" "} 
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign up</Link>
              </p><br></br>
              <button onClick={handleLogin} type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
            </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
