import React from 'react'
import list1 from "../../public/list1.json";
import Card1 from"./card1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
import Work from "./work";
import C from "./c/";

function attorney() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 item-center justify-center text-center'>
          <C/>
        </div>
      
        <div className='mt-28 item-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'> 
            MEET OUR EXPERT  
            <span className='text-blue-600'>ATTORNEY</span>
          </h1>
          <p className='mt-12'>
          At our law firm, we take pride in our team of seasoned attorneys who bring a wealth of experience and dedication to every case. Whether you’re facing a complex legal issue or seeking personalized advice, our experts are here to guide you. From family law to corporate litigation, our attorneys specialize in a wide range of practice areas. We believe in providing comprehensive solutions tailored to your unique needs. Get to know our exceptional legal minds below.
          </p>
          <Link to="/"><button className='mt-6 bg-blue-500 text-white px-4 py-2 hover:bg-blue-950 duration-300'>Back</button></Link>
        </div>

        <div className='mt-12'>
          <Slider {...settings}>
            {list1.map((item1,index)=>(
              <Card1 key={item1.id} item1={item1} id={index+1}/>
            ))}
          </Slider>
        </div>
        <Work/>
      </div>
    </>
  )
}

export default attorney;
