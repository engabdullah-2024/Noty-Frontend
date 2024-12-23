import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className='bg-blue-500 text-white px-6 py-4 flex justify-between items-center w-full'>
           <Link to="/add-note"><h1 className='text-3xl font-bold'>Welcome to Noty</h1></Link> 
            <div className='md:hidden' onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
                <Link to="/add-note" className='block md:inline-block px-4 py-2'>Add Note +</Link>
                <Link to="/notes" className='block md:inline-block px-4 py-2'>Notes</Link>
                <Link to="/register" className='block md:inline-block px-4 py-2'>Register Now</Link>
                <Link to="/login" className='block md:inline-block px-4 py-2'>Login Now</Link>
                
            </nav>
            
        </header>
    );
};

export default Header;