import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Profile() {
  return (
    <div className='bg-slate-400 mx-8 pb-4'>
      <div className="w-[150px] mx-auto">
      <img src="https://img.freepik.com/free-vector/man-wearing-glasses-smiling-head_1308-140495.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=ais" alt="image" className='rounded-full p-2'/>
      </div>
      
      <h1 className='text-center mt-2 text-2xl font-bold'>Dev Soni</h1>
      <h3 className='text-center mb-1 text-xl text-blue-500 font-semibold'>Web-Developer</h3>

      <div className='text-center mt-2 flex font-semibold text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quaerat fuga ratione nisi, vero deleniti architecto vitae, quo optio neque enim rerum numquam velit impedit? Atque hic sit iusto rem dolorem ab error dolorum?</p>
      </div>
      <div className='items-center justify-center flex gap-x-4 pt-4 font-semibold text-blue-500 text-2xl'>
        <FaChevronLeft />
        <FaChevronRight />
      </div>
        <button className='justify-center flex mx-auto border-black bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded-full'>Suprise Me</button>
    </div>
  )
}

export default Profile
