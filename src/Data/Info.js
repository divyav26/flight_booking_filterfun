import c1 from '../imgs/card/mumbai.jpg'
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";

export const Allflights = [
    { id: 1, 
    img:c1,
    source: 'New York', 
    destination: 'Los Angeles', 
    date: '2024-04-27', 
    price: 10000, 
    airline: 'Air India Express',
    classType: 'Economy' 
    },

    { id: 2,
        img:c1,
         source: 'Los Angeles',
          destination: 'New York',
           date: '2024-04-28', 
           price: 15000, 
           airline: 'Spice Jet', 
           classType: 'Business'
    },

    { id: 3,
      img:c1,
       source: 'Mumbai',
        destination: 'Delhi',
         date: '2024-04-29', 
         price: 13000, 
         airline: 'Fly Big', 
         classType: 'Economy'
  },

  {   id: 4,
      img:c1,
      source: 'Bengaluru',
      destination: 'Delhi',
       date: '2024-05-01', 
       price: 15000, 
       airline: 'Spice Jet', 
       classType: 'Economy'
},
{   id: 5,
  img:c1,
  source: 'Kolkata',
  destination: 'Delhi',
   date: '2024-05-02', 
   price: 8000, 
   airline: 'Indigo', 
   classType: 'Business'
},
{   id: 6,
  img:c1,
  source: 'Bengaluru',
  destination: 'Pune',
   date: '2024-05-03', 
   price: 11000, 
   airline: 'Fly Big', 
   classType: 'Premium Economy'
},
    
  ];

  export const allClasses =[
    {id:1, name:'Economy'},
    {id:2, name:'Business'},
    {id:3, name:'Premium Economy'},
  ]

  export const alAirlines =[
    {id:1, name:'Air India'},
    {id:2, name:'Air India Express'},
    {id:3, name:'Alliance Air'},
    {id:4, name:'Fly Big'},
    {id:5, name:'Indigo'},
    {id:6, name:'Spice Jet'},
    {id:7, name:'Vistara Airline'},
    
  ]

  export const Memories =[
    {
      id:1,
      icons:<FaCalendarAlt />,
      title:'Book & Relax',
      description:'With "Book and Relax" you can site back, unwind, and enjoy he journey whilte take care of everything else. '
    },
    {
      id:2,
      icons:<FaCheckCircle />,
      title:'Smart Checklist',
      description:'Introducing Smart Checklist with us, the innovative solution revolutionizing the way you travel with our airline.'
    },
    {
      id:3,
      icons:<MdSaveAlt />,
      title:'Save More',
      description:'From discounted ticket prices to exclusive promotions and deals.'
    }
  ]

export const Bookwith =[
  {
    id:1, 
    img:'https://www.easemytrip.com/images/nwhomfiles/easy-booking.svg',
    title:'Easy Booking',
    description:'We offer easy and convenient flight bookings with attractive offers.'
  },
  {
    id:2, 
    img:'https://www.easemytrip.com/images/nwhomfiles/lowest-booking.svg',
    title:'Lowest Price',
    description:'We ensure low rates on hotel reservation, holiday packages and on flight tickets.'
  },
  {
    id:3, 
    img:'https://www.easemytrip.com/images/nwhomfiles/exc-deal.svg',
    title:'Exciting Deals',
    description:'Enjoy exciting deals on flights, hotels, buses, car rental and tour packages.'
  },
  {
    id:4, 
    img:'https://www.easemytrip.com/images/nwhomfiles/support.svg',
    title:'24/7 Support',
    description:'Get assistance 24/7 on any kind of travel related query. We are happy to assist you.'
  }
]