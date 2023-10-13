import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 px-5 md:py-7'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want Tips and Tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type='email'
                     placeholder='email...'
                     className='p-3 flex w-full rounded-md text-black hover:outline-[#00fda9]'
                     />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black hover:bg-black hover:text-[#00df9a] ease-in-out duration-500 hover:bounceOrig'>
                        Notify Me
                    </button>
                </div>
                    <p className='px-5'>We care about the protection of your data. Read our
                    <span className='text-[#00f9da] px-2 md:px-2 cursor-pointer hover:animate-pulse'>Privacy Policy.</span>
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;