import React from 'react'
import logo from '../imgs/logo.jpg'

const Navbar = () => {
  return (
    <>
     <div className=''>
        <div className='flex justify-start items-center shadow-md p-2 px-[10rem]'>
            <img src={logo} alt='logo' className='w-[10%] h-[10vh]' />
            <h1 className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Flight Booking App.</h1>
        </div>    
    </div> 
    </>
  )
}

export default Navbar
