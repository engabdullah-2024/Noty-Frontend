import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='bg-blue-500 text-white px-20 py-6 flex justify-between w-full items-center'>
            <h1 className='text-3xl font-bold'>Welcome to Noty</h1>
           <Link to="/add-note"><h1>Add Note  +</h1></Link> 
           <Link to="/notes"><h1> Notes</h1></Link> 
           <Link to="/register"><h1> Register Now</h1></Link> 
           <Link to="/login"><h1> Login Now</h1></Link> 
        </header>
    );
};

export default Header;