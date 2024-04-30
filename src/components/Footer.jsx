import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div>
      <div className='lg:flex lg:justify-around lg:items-center bg-blue-50 py-[4rem] lg:px-0 px-[2rem]'>
        <div className='flex justify-between items-center lg:gap-[1rem] gap-[2rem]'>
          <div className=''>
            <TfiEmail className='text-indigo-500 text-5xl' />
          </div>
          <div className=''>
            <p className='font-semibold'>Get the latest news and offers</p>
            <h1 className='text-xl font-bold'>Subscribe Newsletters & get Latest News</h1>
          </div>
        </div>
        
        <div className='lg:mt-0 mt-5'>
          <input type='text' placeholder='Enter your email address' className='py-[0.5rem] px-5 text-xs lg:w-[60%] w-[70%] border-gray-50'/>
          <button className='bg-indigo-500 text-white font-bold px-2 py-1'>Subscribe</button>
        </div>
      </div>

      <div className='lg:flex lg:justify-around items-center lg:h-[50vh] w-full bg-gray-50'>
        <div>
          <h1 className='font-bold text-xl'>Need any Help</h1>
          <div className='text-sm my-2'>
            <p className='font-bold'>Call 24/7 for any help</p>
            <p className='text-indigo-500'>+1 (844) 344-32273</p>
          </div>

          <div className='text-sm my-2'>
            <p className='font-bold'>Mail to our support team</p>
            <p className='text-indigo-500'>tourtravel@filghts.com</p>
          </div>

          <div className='font-bold'>
            <p className='text-sm'>Follow us on</p>
            <div className='flex justify-start items-center my-2 gap-3 text-indigo-500'>
              <FaSquareInstagram />
              <CiFacebook />
            </div>
          </div>

          
        </div>
        <div className=''>
            <h1 className='font-bold border-b border-indigo-500'>ABOUT Us</h1>
            <div className=''>
              <ul className='my-1 text-sm'>
                <li className='my-1'>Home</li>
                <li className='my-1'>About Us</li>
                <li className='my-1'>Cheap Flights</li>
                <li className='my-1'>Group Travels</li>
              </ul>
            </div>
        </div>

        <div className=''>
          <h1 className='font-bold border-b border-indigo-500'>TRAVELER TOOLS</h1>
          <div className=''>
              <ul className='my-1 text-sm'>
                <li className='my-1'>Check Flights</li>
                <li className='my-1'>Customer Support</li>
                <li className='my-1'>Airline Baggage Fees</li>
                <li className='my-1'>FAQS</li>
                <li className='my-1'>Travel Blog</li>
              </ul>
            </div>
        </div>

        <div className=''>
          <h1 className='font-bold border-b border-indigo-500'>TOP CITIES</h1>
          <div className=''>
              <ul className='my-1 text-sm'>
                <li className='my-1'>Flights to India</li>
                <li className='my-1'>Flights to London</li>
                <li className='my-1'>Flights to NewYork</li>
                <li className='my-1'>Flights to Chicago</li>
                <li className='my-1'>Flights to Mumbai</li>
              </ul>
            </div> 
        </div>

      </div>
    </div>
  )
}

export default Footer
