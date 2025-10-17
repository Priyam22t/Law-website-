import React from 'react'
import { Link } from 'react-router-dom';

function cards({item}) {
  return (
    <>
    
      
      <div className='mt-4 my-3 p-3'>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.cateogory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
    <Link className="w-full text-center cursor-pointer px-2 py-1 rounded-full border -[2px] hover:bg-yellow-500 hover:text-white duration-200" to="/contact" > <div >contact us</div> </Link>
    </div>
  </div>
</div>
      </div>
      
      
    
    </>
  )
}

export default cards;
