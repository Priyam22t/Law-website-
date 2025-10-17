import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./cards";


function Freelawyer() { 
  const filterdata = list.filter((data) => data.cateogory === "free");  
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
       <div> <h1 className='font-semibold text-xl pb-2 '>OUR PRACTICE AREAS</h1>
        <p>“At our law firm, we specialize in a wide range of legal areas, from family law to corporate litigation. Our experienced team is dedicated to providing comprehensive solutions tailored to your unique needs.”</p>
        </div>
    
      <div>
      <Slider {...settings}>
{filterdata.map((item)=>(
    <Cards item={item} key={item.id}/>
))
}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default Freelawyer; 

