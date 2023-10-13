import React from 'react';
import Single from '../assets/Single.svg';
import Double from '../assets/Double.svg'
import Triple from '../assets/Triple.svg'

const Cards = () => {
  return (
    <div className='bg-gray-300 w-full py-[10rem] px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* ---------------------- Single User ----------------------------------------- */}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-200
                         bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500'>
            <img src={Single} alt='Single' className='w-20 mx-auto mt-[-3rem] bg-white'/>
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
              <p className='py-2 border-b mx-8 '>Single User</p>
              <p className='py-2 border-b mx-8 '>Send upto 2GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-gray-300 hover:text-[#00df9a] duration-300 ease-in-out'>
              Start Trial    
            </button>
          </div>
          {/* --------------------------------- Double User ----------------------------------------- */}
          <div className='w-full shadow-xl flex flex-col p-4 md:my-4 my-20 rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-200
                          bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300'>
            <img src={Double} alt='Double' className='w-20 mx-auto mt-[-3rem] bg-white'/>
            <h2 className='text-2xl font-bold text-center py-8'>Two User</h2>
            <p className='text-center text-4xl font-bold'>$349</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>1TB Storage</p>
              <p className='py-2 border-b mx-8 '>Two User</p>
              <p className='py-2 border-b mx-8 '>Send upto 10GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-gray-300 hover:bg-black hover:text-[#00df9a] duration-300 ease-in-out'>
              Start Trial    
            </button>
          </div>
          {/* ------------------------------------ Triple User ---------------------------------------- */}
          <div className='w-full shadow-xl flex flex-col p-4 md:my-4 my-5 rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-200
                          bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300'>
            <img src={Triple} alt='Triple' className='w-20 mx-auto mt-[-3rem] bg-white'/>
            <h2 className='text-2xl font-bold text-center py-8'>Three User</h2>
            <p className='text-center text-4xl font-bold'>$549</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>5TB Storage</p>
              <p className='py-2 border-b mx-8 '>Three User</p>
              <p className='py-2 border-b mx-8 '>Send upto 12GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#e5b80b] hover:text-[#fff] duration-300 ease-in-out'>
              Start Trial    
            </button>
          </div>
        </div>
    </div>
  )
}

export default Cards;