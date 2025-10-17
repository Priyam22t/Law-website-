import React, { useState } from "react";
import "./pricing.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const PricingCard = ({ title, price, storage, users, sendup, attorney}) => {
  const [subscribed, setSubscribed] = useState(false);
  const [donealert,setDoneAlert] = useState(false);
  const [showalert,setShowAlert] = useState(false);
  const navigate  = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email,setEmail] = useState('');
  const [username,setName] = useState('');
  const [passwd,setPasswd] = useState('');
  const [phone,setPhone] = useState('');
  const [accountNo,setAccountNo] = useState('');
  const [expiry,setExpiry] = useState('');
  const [cvv,setCVV] = useState('');

  const handlePayment = (price) => {
    const amt = price.slice(1);
    console.log(username,email,phone,accountNo,amt,attorney)
    axios.post("http://localhost:8080/payment",{username,email,phone,accountNo,amt,attorney})
    .then((res)=>{
      if(res.data === "success"){
      // alert("Subscribed!!")
      setShowAlert(true);
      setSubscribed(true);
      }
      if(res.data === "failed"){
        setDoneAlert(true);
      }
    })
    .catch((err)=>{
      setDoneAlert(false);
      console.log(err);
    })
  }

  const handleSubscribe = (price) => {
    document.getElementById("my_modal_4").showModal();
  };

  return (
    <div className="PricingCard">
      <header>
        <p className="card-title">{title}</p>
        <h1 className="card-price">{price}</h1>
      </header>
      <div className="card-features">
        <div className="card-storage">{storage}</div>
        <div className="card-users-allowed">{users} users in total</div>
        <div className="card-send-up"> {sendup}</div>
      </div>
      
      {subscribed ? (
        <p className="subscription-status">Subscribed! Thank you!</p>
      ) : (
        <button
          className="card-btn"
          onClick={() => handleSubscribe(price)}
        >
          SUBSCRIBE
        </button>
      )}

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          {/* Close button */}
          <Link
            onClick={() => document.getElementById("my_modal_4").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg">Let's solve your case!!</h3>
          <p>Subscribe to consult our world's best lawyers!!</p>
          {donealert && (
        <div role="alert" className="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your purchase has been done already!</span>
      </div>
      )}
          {showalert && (
        <div role="alert" className="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your purchase has been confirmed!</span>
      </div>
      )}
          <br></br>
          <div>
            <span>Name</span>
            <br />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your Name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
            {errors.email && (
              <span className="text-red-500 mt-2 block">
                {errors.email.message}
              </span>
            )}
            <br />
            <br></br>
          </div>
          <div>
            <span>Phone No</span>
            <br />
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Enter your phone no"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
            <br />
            <br></br>
            {errors.password && (
              <span className="text-red-500 mt-2 block">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <span>Email ID</span>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email ID"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
            <br />
            <br></br>
            {errors.password && (
              <span className="text-red-500 mt-2 block">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <span>Account No</span>
            <br />
            <input
              onChange={(e) => setAccountNo(e.target.value)}
              type="text"
              placeholder="Enter your account no"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
            <br />
            <br></br>
            {errors.password && (
              <span className="text-red-500 mt-2 block">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <span>CVV No</span>
            <br />
            <input
              onChange={(e) => setCVV(e.target.value)}
              type="password"
              placeholder="Enter your CVV no"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
            <br />
            <br></br>
            {errors.password && (
              <span className="text-red-500 mt-2 block">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <span>Expiry Date</span>
            <br />
            <input
              onChange={(e) => setExpiry(e.target.value)}
              type="password"
              placeholder="Enter your Expiry Date"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
            <br />
            <br></br>
            {errors.password && (
              <span className="text-red-500 mt-2 block">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="inline justify-around">
            <br></br>
            <button
              onClick={() => handlePayment(price)}
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </dialog>
      
    </div>
  );
};

export default PricingCard;
