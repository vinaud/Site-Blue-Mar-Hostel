import React from 'react';
import BtnContato from '../components/BtnContato';
import Logo from '../components/logo';

const Header = ({children}) => {
    return(
        <div>
            <header className = 'p-4 bg-indigo-800 sm:flex justify-between items-center'>
            <Logo />

            <h1 className= 'text-white font-bold text-5xl'> Blue Mar Hostel</h1>
            <div>
              <BtnContato/>
            </div>

            </header>
        </div>
    )
}

export default Header;