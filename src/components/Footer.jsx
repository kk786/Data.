import React from 'react';
import {
FaDribbbleSquare,
FaFacebookSquare,
FaGithubSquare,
FaInstagramSquare,
FaTwitterSquare, 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold  text-[#00df9a]'>DATA.</h1>
            <p className='py-4 '>Connect With Us On Various Social Platforms.</p>
            <div className='flex justify-between md:w-[75%] my-6 '>
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 mt-6 md:pl-10 flex justify-between'>
            <div>
            <h6 className='font-medium text-gray-600'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketings</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-600'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing </li>
                    <li className='py-2 text-sm'>Documents</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-600'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;