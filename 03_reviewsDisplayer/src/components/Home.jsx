// import React from 'react'
// import { useState } from 'react';
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; 
// import data from '../data.json'

// const PersonCard = ({ person }) => {
//     return (
//         <div className='bg-slate-400 mx-8 pb-4'>
//         <div className="w-[150px] mx-auto">
//         <img src={person.image} alt={person.name} className='rounded-full p-2'/>
//         </div>
        
//         <h1 className='text-center mt-2 text-2xl font-bold'>{person.name}</h1>
//         <h3 className='text-center mb-1 text-xl text-blue-500 font-semibold'>{person.role}</h3>
  
//         <div className='text-center mt-2 flex font-semibold text-gray-600'>
//           <p>{person.about}</p>
//         </div>
//       </div>
//     );
//   };

// export default function Home() {
//     const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

//   const handleNextPerson = () => {
//     setCurrentPersonIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   const handlePrevPerson = () => {
//     setCurrentPersonIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   };
//     return (
//     <>
//         <div className='items-center justify-center flex gap-x-4 pt-4 font-semibold text-blue-500 text-2xl'>
//             <button onClick={handlePrevPerson}>
//                 <FaChevronLeft />
//             </button>
//             <PersonCard person={data[currentPersonIndex]}/>
//             <button onClick={handleNextPerson}>
//                 <FaChevronRight />
//             </button>
//         </div>
//         <button className='justify-center flex mx-auto border-black bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded-full'>Suprise Me</button>
//     </>
//   )
// }

import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; 
import data from '../data.json';

const PersonCard = ({ person, handlePrevPerson, handleNextPerson }) => {
  return (
    <div className='bg-slate-400 mx-8 pb-4'>
      <div className="w-[150px] mx-auto">
        <img src={person.image} alt={person.name} className='rounded-full p-2'/>
      </div>
      
      <h1 className='text-center mt-2 text-2xl font-bold'>{person.name}</h1>
      <h3 className='text-center mb-1 text-xl text-blue-500 font-semibold'>{person.role}</h3>
  
      <div className='text-center mt-2 flex font-semibold text-gray-600'>
        <p>{person.about}</p>
      </div>

      <div className='flex justify-center items-center mt-4'>
        <button onClick={handlePrevPerson}>
          <FaChevronLeft />
        </button>
        <button onClick={handleNextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const devSoniIndex = data.findIndex(person => person.name === 'Dev Soni')
  
    const [currentPersonIndex, setCurrentPersonIndex] = useState(devSoniIndex);

  const handleNextPerson = () => {
    setCurrentPersonIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevPerson = () => {
    setCurrentPersonIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleSupriseMe = () =>{
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentPersonIndex(randomIndex);
  }

  return (
    <>
      <div className='items-center justify-center flex gap-x-4 pt-4 font-semibold text-blue-500 text-2xl'>
        <PersonCard 
          person={data[currentPersonIndex]}
          handlePrevPerson={handlePrevPerson}
          handleNextPerson={handleNextPerson}
        />
      </div>
      <button onClick={handleSupriseMe} className='justify-center flex mx-auto border-black bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded-full'>Suprise Me</button>
    </>
  )
}
