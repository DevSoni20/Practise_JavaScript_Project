import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-slate-400'>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className='text-xl'>
          Coding <span style={{color: 'blue'}}>Action</span>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col'>
            <li className='my-2 hover:text-slate-200 text-xl'>
              <Link to="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li className='my-2 hover:text-slate-200 text-xl'>
              <Link to="/About" onClick={toggleNavbar}>
                About
              </Link>
            </li>
            <li className='my-2 hover:text-slate-200 text-xl'>
              <Link to="/Project" onClick={toggleNavbar}>
                Projects
              </Link>
            </li>
            <li className='my-2 hover:text-slate-200 text-xl'>
              <Link to="/Contact" onClick={toggleNavbar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:block'>
          <ul className='flex'>
            <li className='mx-4 hover:text-slate-200 text-xl'>
              <Link to="/">
                Home
              </Link>
            </li>
            <li className='mx-4 hover:text-slate-200 text-xl'>
              <Link to="/About">
                About
              </Link>
            </li>
            <li className='mx-4 hover:text-slate-200 text-xl'>
              <Link to="/Project">
                Projects
              </Link>
            </li>
            <li className='mx-4 hover:text-slate-200 text-xl'>
              <Link to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='block md:hidden'>
          <button onClick={toggleNavbar} className='text-white hover:text-slate-200 focus:outline-none'>
            <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <div className='bg-slate-400'>
//       <nav className="flex items-center justify-between flex-wrap p-6">
//         <div className='text-xl'>
//           Coding <span style={{color: 'blue'}}>Action</span>
//         </div>
//         <div className='flex mx-auto items-center'>
//           <ul className='flex'>
//             <li className='mx-4 hover:text-slate-200 text-xl'>
//               <Link to="/">
//                 Home
//               </Link>
//             </li>
//             <li className='mx-4 hover:text-slate-200 text-xl'>
//               <Link to="/About">
//                 About
//               </Link>
//             </li>
//             <li className='mx-4 hover:text-slate-200 text-xl'>
//               <Link to="/Project">
//                 Projects
//               </Link>
//             </li>
//             <li className='mx-4 hover:text-slate-200 text-xl'>
//               <Link to="/Contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar
