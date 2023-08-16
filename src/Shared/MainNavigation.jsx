import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const MainNavigation = () => {
    return (
        <div className="navbar bg-blue-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li className='text-black me-4'>Home</li></Link>
                        <Link to='/about'><li className='text-black  me-4'>About</li></Link>
                        <Link to='/businesses'><li className='text-black  me-4'>Businesses</li></Link>
                        <Link to='/projects'><li className='text-black me-4'>Projects</li></Link>
                        <Link to='/team'><li className='text-black  me-4'>Team</li></Link>
                        <Link to='/blog'><li className='text-black  me-4'>Blog</li></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-white">BFGC</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li className='text-[16px] text-white me-8'>Home</li></Link>
                    <Link to='/about'><li className='text-[16px] text-white me-8'>About</li></Link>
                    <Link to='/businesses'><li className='text-[16px] text-white  me-8'>Businesses</li></Link>
                    <Link to='/projects'><li className='text-[16px] text-white  me-8'>Projects</li></Link>
                    <Link to='/team'><li className='text-[16px] text-white me-8'>Team</li></Link>
                    <Link to='/blog'><li className='text-[16px] text-white me-8'>Blog</li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <p className='flex gap-4 text-white pe-5'>
                    <Link><FaFacebook></FaFacebook></Link>
                    <Link><FaLinkedin></FaLinkedin></Link>
                    <Link><FaTwitter></FaTwitter></Link>
                    <Link><FaInstagram></FaInstagram></Link>
                </p>
            </div>
        </div>
    );
};

export default MainNavigation;