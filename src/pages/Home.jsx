import React, { useEffect, useState} from 'react'
import banner from '../imgs/banner.jpg'
import { alAirlines, allClasses } from '../Data/Info'
import { Allflights } from '../Data/Info'
import { MdConnectingAirports } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const Home = () => {
    const [searchsource, setSource] = useState('');
    const [searchdestination, setDestination] = useState('');
    const [searchdate, setDate] = useState(new Date());
    const [searchPrice , setPrice] = useState('');
    const [searchallclass, setAllClass] = useState('');
    const [searchallAirlines , setAllAirlines] = useState('')
    const [filteredFlights, setFilteredFlights] = useState([])

    useEffect(()=>{
        let filtered = Allflights.filter(flight=>{
            if(searchsource && flight.source.toLowerCase() !== searchsource.toLowerCase()) return false
            if(searchdestination && flight.destination.toLowerCase() !== searchdestination.toLowerCase()) return false
            if(searchallAirlines && flight.airline.toLowerCase() !== searchallAirlines.toLowerCase())return false
            if(searchallclass && flight.classType.toLowerCase() !== searchallclass.toLowerCase()) return false
            return true
        })

        if (searchPrice === 'lowPrice') {
            filtered = filtered.sort((a, b) => a.price - b.price);
          } else if (searchPrice === 'highPrice') {
            filtered = filtered.sort((a, b) => b.price - a.price);
          }





        setFilteredFlights(filtered)

    },[searchsource,searchdestination,searchallAirlines,searchallclass,searchPrice])
   

  
  return (
    <>
    <div>
      <div className='relative'>
        <img src={banner} alt='bg_banner' className='w-full lg:h-[70vh]' />
        <div className="bg-black/45 absolute top-0 left-0 w-full lg:h-[70vh]" />
      </div>
      <div className='absolute top-40'>
        <div className='grid grid-cols-3 gap-[1rem] px-[10rem]'>
            <div className='flex flex-col'>
                <label className='text-white'>Source</label>
                <input type='text' value={searchsource} onChange={(e)=>setSource(e.target.value)} className='p-2 rounded-sm' placeholder='Source' />
            </div>
            <div className='flex flex-col'>
                <label className='text-white'>Destination</label>
                <input type='text' value={searchdestination} onChange={(e)=>setDestination(e.target.value)} className='p-2 rounded-sm' placeholder='Destination' />
            </div>
            <div className='flex flex-col'>
                <label className='text-white'>Date</label>
                <input type='date' value={searchdate} onChange={(e)=>setDate(e.target.date)} className='p-2 rounded-sm' placeholder='Destination' />
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
                        allClasses.map((item,id)=>{
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

   <div className='lg:grid lg:grid-cols-2 gap-[2rem] px-[10rem] mb-[2rem]'>
    {
        filteredFlights.map((val,id)=>{
            return(
                <>
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
                </>
            )
        })
    }
   </div>
    </>
  )
}

export default Home
