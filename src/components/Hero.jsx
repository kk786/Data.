import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-5xl text-4xl font-bold md:py-6'>GROW WITH DATA.</h1>
            <div className='flex justify-center items-center md:pt-2 sm:pt-1 pt-0'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold pt-2'>Fast, Flexible financing for</p>
                <Typed
                 className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-5' 
                 strings={['BTB', 'BTC', 'SASS']}
                 typeSpeed={120}
                 backSpeed={140} 
                 loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 md:pt-3 sm:pt-2 pt-1'>
                First speeding ticket was issued for driving at 13kmph.
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-black hover:text-[#00df9a] ease-in-out duration-500 hover:swipeRight'>
                Get Started →
                </button>
        </div>
    </div>
  )
}

export default Hero;