import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className='py-4 bg-white w-full sticky top-0 z-50 px-4 sm:px-16'>
        <nav className=' flex items-center justify-between'>
            <h1 className=' text-2xl font-bold text-forestJade w-full'>ResumeGenius AI</h1>
            <ul className=' grid grid-cols-6 place-items-center w-full'>
                <li className=' cursor-pointer flex items-center text-deepTeal font-semibold text-sm col-span-1 px-2 py-1'>Features <FaAngleRight className=' ml-1.5' /></li>
                <li className=' cursor-pointer flex items-center text-deepTeal font-semibold text-sm col-span-1 px-2 py-1'>Experiences <FaAngleRight className=' ml-1.5' /></li>
                <li className=' cursor-pointer flex items-center text-deepTeal font-semibold text-sm col-span-1 px-2 py-1'>Pricing <FaAngleRight className=' ml-1.5' /></li>
                <li className=' cursor-pointer flex items-center text-deepTeal font-semibold text-sm col-span-1 px-2 py-1'><FaUserAlt className=' mr-1.5' /> Login </li>
                <li className=' cursor-pointer col-span-2 px-2 py-1'>
                    <button className=' bg-deepTeal text-white font-bold shadow-md text-sm px-3 py-2.5 rounded-sm '>Resume Analyzer</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header