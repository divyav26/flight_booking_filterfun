import c1 from '../imgs/card/mumbai.jpg'

export const Allflights = [
    { id: 1, 
    img:c1,
    source: 'New York', 
    destination: 'Los Angeles', 
    date: '2024-04-22', 
    price: 10000, 
    airline: 'Air India Express',
    classType: 'Economy' 
    },

    { id: 2,
        img:c1,
         source: 'Los Angeles',
          destination: 'New York',
           date: '2024-04-22', 
           price: 15000, 
           airline: 'Spice Jet', 
           classType: 'Business'
    },

    { id: 3,
      img:c1,
       source: 'Mumbai',
        destination: 'Delhi',
         date: '2024-04-22', 
         price: 13000, 
         airline: 'Air India Express', 
         classType: 'Business'
  },

  { id: 4,
    img:c1,
     source: 'Mumbai',
      destination: 'Delhi',
       date: '2024-04-22', 
       price: 13000, 
       airline: 'Fly Big', 
       classType: 'Business'
  },
  {   id: 5,
      img:c1,
      source: 'Bengaluru',
      destination: 'Delhi',
       date: '2024-04-22', 
       price: 15000, 
       airline: 'Spice Jet', 
       classType: 'Business'
},
{   id: 6,
  img:c1,
  source: 'Kolkata',
  destination: 'Delhi',
   date: '2024-04-22', 
   price: 8000, 
   airline: 'Indigo', 
   classType: 'Business'
},
{   id: 7,
  img:c1,
  source: 'Bengaluru',
  destination: 'Pune',
   date: '2024-04-22', 
   price: 11000, 
   airline: 'Fly Big', 
   classType: 'Business'
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

  export const price =[
    {id:1, price:10000},
    {id:1, price:12000},
    {id:1, price:15000},
    {id:1, price:8000},
    {id:1, price:9000},
    {id:1, price:11000},
  ]