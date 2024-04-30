import React from 'react'
import logo from '../imgs/logo.jpg'

const Navbar = () => {
  return (
    <>
     <div className='flex'>
        <div className='flex justify-start items-center p-2 lg:px-[2rem] px-[2rem]'>
            <img src={logo} alt='logo' className='lg:w-[10%] h-[10vh]' />
            <h1 className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Flight Booking App.</h1>
        </div> 
        <div className=''>
          <div className=''>
            <button>Sign Up</button>
          </div>
          <div className=''>
            <button>Login</button>
          </div>  
        </div>   
    </div> 
    </>
  )
}

export default Navbar
