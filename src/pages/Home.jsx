import React, { useEffect, useState} from 'react'
import banner from '../imgs/banner.jpg'
import { alAirlines, allClasses } from '../Data/Info'
import { Allflights } from '../Data/Info'
import { FaLocationArrow } from "react-icons/fa";
import { format } from 'date-fns'; 
import { FaIndianRupeeSign } from "react-icons/fa6";


const Home = () => {
    const [searchsource, setSource] = useState('');
    const [searchdestination, setDestination] = useState('');
    const [searchdate, setDate] = useState('');
    const [searchPrice , setPrice] = useState('');
    const [searchallclass, setAllClass] = useState('');
    const [searchallAirlines , setAllAirlines] = useState('')
    const [filteredFlights, setFilteredFlights] = useState([])

    useEffect(()=>{
        console.log("searchdate",searchdate)
        let filteredData = Allflights.filter(flight=>{
            if(searchsource && flight.source.toLowerCase() !== searchsource.toLowerCase()) return false
            if(searchdestination && flight.destination.toLowerCase() !== searchdestination.toLowerCase()) return false
            if(searchallAirlines && flight.airline.toLowerCase() !== searchallAirlines.toLowerCase())return false
            if(searchallclass && flight.classType.toLowerCase() !== searchallclass.toLowerCase()) return false 
            if (searchdate && format(new Date(flight.date), 'yyyy-MM-dd') !== format(new Date(searchdate), 'yyyy-MM-dd')) return false;
            return true
        })


        
       

        if (searchPrice === 'lowPrice') {
            filteredData = filteredData.sort((a, b) => a.price - b.price);
          } else if (searchPrice === 'highPrice') {
            filteredData = filteredData.sort((a, b) => b.price - a.price);
          }
        setFilteredFlights(filteredData)

    },[searchsource,searchdestination,searchallAirlines,searchallclass,searchPrice,searchdate])
   

  return (
    <>
    <div>
      <div className='relative'>
        <img src={banner} alt='bg_banner' className='w-full lg:h-[75vh] md:h-[50vh] h-[70vh]' />
        <div className="bg-black/45 absolute top-0 left-0 w-full lg:h-[75vh] md:h-[50vh] h-[70vh]" />
      </div>
      <div className='absolute lg:top-40 md:top-60 top-40 w-full'>
      <div className='text-center mb-[2rem]'>
        <h1 className='text-4xl font-bold text-white'>Life Is Short And The World Is Wide!</h1>
      </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[1rem] lg:px-[5rem] p-[2rem] px-[2rem] bg-black/40 '>
            <div className='flex flex-col'>
                <label className='text-white block'>Source</label>
                <input type='text' value={searchsource} onChange={(e)=>setSource(e.target.value)} className='p-2 rounded-sm' placeholder='Source' />
            </div>
            <div className='flex flex-col'>
                <label className='text-white'>Destination</label>
                <input type='text' value={searchdestination} onChange={(e)=>setDestination(e.target.value)} className='p-2 rounded-sm block lg:w-[100%] w-[100%]' placeholder='Destination' />
            </div>
            <div className='flex flex-col'>
                <label className='text-white'>Date</label>
                <input type='date' value={searchdate} onChange={(e)=>setDate(e.target.value)} className='p-2 rounded-sm' />
            </div>

            <div className='flex flex-col'>
            <select className='p-2 rounded-sm' value={searchPrice} onChange={(e)=>setPrice(e.target.value)}>
                <option value="lowPrice">Lowest Price</option>
                <option value="highPrice">Highest Price</option>
            </select>
            </div>


            <div className='flex flex-col'>
                
                <select className='p-2 rounded-sm' value={searchallAirlines} onChange={(e)=>setAllAirlines(e.target.value)}>
                    <option>All Airlines</option>
                    {
                        alAirlines.map((item)=>{
                            return(
                                <>
                                    <option value={item.name}>{item.name}</option>
                                </>
                            )
                        })
                    }
                </select>
            </div>

            <div className='flex flex-col'>
                
                <select className='p-2 rounded-sm' value={searchallclass} onChange={(e)=>setAllClass(e.target.value)}>
                <option>All Classes</option>
                    {
                        allClasses.map((item)=>{
                            return(
                                <>
                                    <option value={item.name}>{item.name}</option>
                                </>
                            )
                        })
                    }
                </select>
            </div>

        </div>
      </div>
    </div>
    <div className='px-[2rem] py-[2rem]'>
        <h1 className='lg:text-4xl text-2xl font-bold'>Choose your amazing places</h1>
    </div>

   <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-[2rem] lg:px-[2rem] px-[2rem] mb-[2rem]'>
  
    {
        filteredFlights.map((val,id)=>{
            return(
                <>
                
                <div className='border-2 border-white rounded-md mt-[1rem] shadow-sm' key={id}>
                  <img src={val.img} alt='img' className='h-[120px] w-full'/>
                  <div className='flex gap-2 p-2 text-sm font-bold'>
                        <p className='flex items-center'>{val.source}</p>
                        <p className=''>to</p>
                        <p className='flex items-center'>{val.destination}</p>
                  </div>
                  <div className='text-sm p-2'>
                    <p className='flex items-center gap-2'><FaIndianRupeeSign />{val.price}</p>
                    <p className='flex items-center gap-2'><FaLocationArrow />{val.date}</p>
                  </div>
                 </div>
          
                </>

            )
        })
    }

   </div>
    </>
  )
}

export default Home
