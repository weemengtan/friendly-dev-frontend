import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const base = 'transition font-light hover:text-blue-400';
    const active = 'text-blue-400 font-semibold'

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50'>
            <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
                <NavLink to="/" className='flex items-center gap-2 text-lg font-bold text-blue-300'>
                    <FaLaptopCode className='text-blue-400 text-xl' />
                    <span className='text-white'>The Friendly Developer</span>
                </NavLink>
                {/* the desktop navigation */}
                <div className='hidden md:flex items-center gap-6'>
                    <div className="space-x-4 text-sm text-gray-300">
                        <NavLink to="/" className={({isActive})=>isActive?active:base}>Home</NavLink>
                        <NavLink to="/about" className={({isActive})=>isActive?active:base}>About</NavLink>
                        <NavLink to="/contact" className={({isActive})=>isActive?active:base}>Contact</NavLink>
                        <NavLink to="/projects" className={({isActive})=>isActive?active:base}>Projects</NavLink>
                        <NavLink to="/blogs" className={({isActive})=>isActive?active:base}>Blogs</NavLink>
                    </div>  
                </div>
                {/* the mobile navigation */}
                <div className='md:hidden'>
                    <button title='menu' onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-white cursor-pointer hover:text-gray-300 focus:outline-none'>
                        {isMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
                    </button>
                </div>
            </div>
            {/* mobile navigation list */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-16 left-0 right-0 bg-gray-800 shadow-md'>
                    <div className='flex flex-col gap-4 p-4'>
                        <NavLink to="/" onClick={()=>setIsMenuOpen(!isMenuOpen)} className={({isActive})=>isActive?active:base}>Home</NavLink>
                        <NavLink to="/about" onClick={()=>setIsMenuOpen(!isMenuOpen)} className={({isActive})=>isActive?active:base}>About</NavLink>
                        <NavLink to="/contact" onClick={()=>setIsMenuOpen(!isMenuOpen)} className={({isActive})=>isActive?active:base}>Contact</NavLink>
                        <NavLink to="/projects" onClick={()=>setIsMenuOpen(!isMenuOpen)} className={({isActive})=>isActive?active:base}>Projects</NavLink>
                        <NavLink to="/blogs" onClick={()=>setIsMenuOpen(!isMenuOpen)} className={({isActive})=>isActive?active:base}>Blogs</NavLink>
                    </div>
                </div>
            )}
        </nav>
)};

export default Navbar;