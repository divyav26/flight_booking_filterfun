import React from 'react'
import banner from '../imgs/card/b2.jpg'
import { Bookwith, Memories } from '../Data/Info'

const BannerHome = () => {
  return (
    <div className='relative mb-[2rem]'>
      <div className='h-full'>
        <img src={banner} alt='banner_logo' className='w-full lg:h-[60vh] h-[30vh] rounded-tl-[5rem] rounded-br-[5rem]' />
        <div className="bg-black/45 absolute top-0 left-0 w-full lg:h-[60vh] rounded-tl-[5rem] rounded-br-[5rem]" />
      </div>
      <div className='absolute top-20 px-[5rem]'>
        <div className='text-white'>
            <p className='font-semibold text-sm'>Offering Best  Deals</p>
            <h1 className='text-4xl font-bold'>Flat 40% off</h1>
            <p className='text-sm'>On flight bookings</p>
        </div>
        <div className=''>
          <button className='text-white font-bold bg-orange-400 rounded-md mt-4 p-2'>Find Your Fly</button>
        </div>
      </div>

      <div className='px-[5rem] py-[2rem]'>
        <h1 className='text-4xl font-bold'>Travel to make memories all around the world</h1>
    </div>

    <div className='lg:flex lg:justify-between items-center gap-[1rem] py-[1rem] px-[5rem]'>
      {
        Memories.map((item)=>{
          return(
            <>
            <div className='shadow-md p-2 rounded-[2rem] w-full lg:h-[40vh] h-[20vh] text-center'>
              <p className='flex justify-center items-center m-2 text-2xl text-red-600'>{item.icons}</p>
              <h1 className='text-xl font-bold my-2'>{item.title}</h1>
              <p className='text-sm text-gray-600 my-2'>{item.description}</p>
            </div>
            </>
          )
        })
      }
    </div>

    <div className='px-[5rem] py-[2rem]'>
        <h1 className='text-4xl font-bold'>Why book with us?</h1>
    </div>

    <div className='lg:flex lg:justify-between items-center gap-[1rem] py-[1rem] px-[5rem]'>

      {
        Bookwith.map((item)=>{
          return(
            <>
            <div className='p-2 w-full text-center m-2 border-solid border-[1px] border-blue-200 lg:h-[40vh] h-[20vh] rounded-[2rem]'>
              <img src={item.img} alt='img' className='m-auto my-2' />
              <h1 className='text-xl font-bold my-2'>{item.title}</h1>
              <p className='text-sm text-gray-600'>{item.description}</p>
            </div>
            </>
          )
        })
      }
    </div>

    </div>
    
  )
}

export default BannerHome
