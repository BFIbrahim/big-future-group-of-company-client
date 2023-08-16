import React from 'react';
import { FaLocationArrow, FaMailBulk } from 'react-icons/fa';

const Navigation = () => {
    return (
        <div className='md:grid grid-cols-4 md:gap-8 items-center'>
            <div>
                <img className='w-40 mx-auto md:mx-0 lg:mx-0' src="https://i.ibb.co/1bX5S1n/logo.png" alt="" />
            </div>
            <div className='text-center mb-8 md:mb-0 lg:mb-0'>
                <p className='md:flex gap-2 text-center md:text-start lg:text-start items-center'>
                    <FaLocationArrow className='text-4xl mx-auto text-blue-950'></FaLocationArrow>
                    <p className='text-gray-600'><p className='font-bold text-black'>Location:</p>
                        Naogaon District, Bangladesh
                    </p>
                </p>
            </div>
            <div className='text-center mb-8 md:mb-0 lg:mb-0'>
                <p className='md:flex gap-2 text-center md:text-start lg:text-start items-center'>
                    <FaMailBulk className='text-4xl mx-auto text-blue-950'></FaMailBulk>
                    <p className='text-gray-600'><p className='font-bold text-black'>Email:</p>
                        bigfuturegroup361@gmail.com
                    </p>
                </p>
            </div>
            <div className='text-center md:text-end lg:text-end'>
                <button className='btn bg-transparent border-2 border-blue-950 text-blue-950 font-semibold'>Contact Us</button>
            </div>
        </div>
    );
};

export default Navigation;