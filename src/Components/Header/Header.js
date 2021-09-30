import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className="flex border-b justify-center">
                <li className="mr-1">
                    <Link className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold' to='/restaurant'>Home</Link>
                </li>
                <li className="mr-1">
                    <Link className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold' to='/orders'>Order</Link>
                </li>
                <li className="mr-1">
                    <Link className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold' to='/About'>About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;