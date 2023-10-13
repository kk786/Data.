import React from 'react';
import Mobile from '../assets/Mobile.svg';

const Analytics = () => {
  return (
    <div className='w-full bg-gray-200 py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Mobile} alt='Laptop_Image' className='w-[500px] mx-auto my-4' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00fd9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Carefully</h1>
                <p>
                   Aliqua fugiat enim in tempor officia Lorem qui et quis aute
                   fugiat sint do culpa.Veniam tempor qui cillum amet est do
                   eiusmod esse non aliquip ipsum ex do
                   Nostrud laborum id cillum amet aute in consectetur occaecat et et.
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:bg-gray-200 hover:text-[#00df9a] ease-in-out duration-500 hover:swipeRight'>
                    Get Started →
                </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics;