import React from 'react';
import { useNavigate } from 'react-router-dom';

function card1({item1,id}) {
  const navigate = useNavigate();

  const handleClick = () => {
    const val = localStorage.getItem("status");
    if(val === "false"){
      alert("Please login to continue!!");
    }
    else{
      if(id === 1){
        navigate('/attorney/goodman')
      }
      if(id === 2){
        navigate('/attorney/matt')
      }
      if(id === 3){
        navigate('/attorney/harvey')
      }
      if(id === 4){
        navigate('/attorney/rudy')
      }
      if(id === 5){
        navigate('/attorney/marshall')
      }
      if(id === 6){
        navigate('/attorney/cochran')
      }
      if(id === 7){
        navigate('/attorney/richard')
      }
    }
  }

  return (
    <div>
      <div className='mt-4 my-3 p-3 '>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure style={{ width: '100%', height: '200px' }} ><img src={item1.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item1.nam}
              <div className="badge badge-secondary">{item1.cateogory}</div>
            </h2>
            <p>{item1.title}</p>
            <div className="card-actions  justify-between">
              <div onClick={handleClick} className="w-full text-center cursor-pointer px-2 py-1 rounded-full border -[2px] hover:bg-yellow-500 hover:text-white duration-200">Get in Touch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card1;
