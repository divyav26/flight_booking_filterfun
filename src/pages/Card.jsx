import React from 'react'
import { Allflights } from '../Data/Info'
import { MdConnectingAirports } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const Card = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 gap-[2rem] px-[10rem] mb-[2rem]'>
          {
            Allflights.map((item)=>{
              return(
                <>
                <div className='border-2 border-white rounded-md p-2 mt-[1rem] shadow-md'>
                  <img src={item.img} alt='img' />
                  <div className='flex justify-around pt-2'>
                        <p className='flex items-center'><FaLocationDot />{item.source}</p>
                        <p className='text-2xl'><MdConnectingAirports /></p>
                        <p className='flex items-center'><FaLocationDot />{item.destination}</p>
                  </div>
                  <div className='pl-[1.2rem]'>
                    <p className='flex items-center'><FaDollarSign />{item.price}</p>
                    <p className='flex items-center'><MdDateRange />Travel {item.date}</p>
                  </div>
                 </div>
                </>
              )
            })
          }
        </div>
  )
}

export default Card
