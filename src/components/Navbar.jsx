import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Hero from './Hero';


const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }


  return (
    // ------------------------------- NAVIGATION MENU ------------------------------------------------
    <div className='flex justify-between items-center h-24 max-w-[1124px] mx-auto px-4 text-white'>
        <h1 className='w-full text-2xl font-bold text-[#00df9a] cursor-pointer hover:ease-in-out duration-500 hover:animate-pulse'>DATA.</h1>
        <ul className='hidden md:flex cursor-pointer'>
            <li className='p-4 hover:text-[#00df9a] hover:scale-110 ease-in duration-200 hover:bounceOrig'>Home</li>
            <li className='p-4 hover:text-[#00df9a] hover:scale-110 ease-in duration-200 hover:bounceOrig'>Company</li>
            <li className='p-4 hover:text-[#00df9a] hover:scale-110 ease-in duration-200 hover:bounceOrig'>Resources</li>
            <li className='p-4 hover:text-[#00df9a] hover:scale-110 ease-in duration-200 hover:bounceOrig'>About</li>
            <li className='p-4 hover:text-[#00df9a] hover:scale-110 ease-in duration-200 hover:bounceOrig'>Contact</li>
        </ul>
{/* ------------------------------ NAVIGATION MENU CLOSED --------------------------------------------- */}

        {/*------------------ FOR MOBILE NAVIGATION MENU ----------------------------------------------  */}
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] top-[0%] ease-in-out duration-500 h-full w-[60%]'}>
        <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>DATA.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
        {/* ----------------------- MOBILE NAVIGATION CLOSED ------------------------------------ */}
    </div>
  )
}

export default Navbar   