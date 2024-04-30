import React from 'react'
import { Allflights } from '../Data/Info'
import { MdConnectingAirports } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background: "gray",paddingTop:'2px',borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background:"gray",paddingTop:'2px',borderRadius:'50%'}}
      onClick={onClick}
    />
  );
}

const Card = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        breakpoint: 922,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className='w-full'>
      <div className='mt-2'>
        <h1 className='text-center font-bold text-4xl'>Top Destinations</h1>
      </div>
    <div className='w-[80%] m-auto'>
    <div className="my-[1rem]">
    <Slider {...settings}>
      {Allflights.map((val,id) => (
       
          <div className='border-2 border-white rounded-md p-2 mt-[1rem] shadow-md' key={id}>
                  <img src={val.img} alt='img' />
                  <div className='flex justify-around pt-2'>
                        <p className='flex items-center'><FaLocationDot />{val.source}</p>
                        <p className='text-2xl'><MdConnectingAirports /></p>
                        <p className='flex items-center'><FaLocationDot />{val.destination}</p>
                  </div>
                  <div className='pl-[1.2rem]'>
                    <p className='flex items-center'><FaDollarSign />{val.price}</p>
                    <p className='flex items-center'><MdDateRange />Travel {val.date}</p>
                  </div>
                 </div>
       
      ))}
    </Slider>
    </div>
    
  </div>
  </div>
  )
}

export default Card
