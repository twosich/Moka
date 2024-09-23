import React from 'react';
import iconBar from '../assets/icons/icon.svg'
import gitBar from '../assets/icons/github.svg'

function Navbar() {
  return(
    <div className='bg-black m-2 rounded-xl h-20 flex flex-row flex-nowrap font-sans'>
        <div className=''>
            <a href="https://www.instagram.com/p/B2EqF3XJ8uZ/?epik=dj0yJnU9TkpfcmpwcmRxVUhFUjMxWi01cVY5Q1dTR0FvZ0p3b2YmcD0wJm49emFUckpzbGZmOUNBWmpuV1huZEt6QSZ0PUFBQUFBR2J4UkxJ">
            <img className='size-16 mt-2 ml-2' src={iconBar} alt="" srcset="" />
            </a>
        </div>
        <div className='grow'>
            <h1 className='text-white font-bold'>Example</h1>
        </div>
        <div className=''>
            <a href="https://github.com/twosich">
              <img className='size-14 mt-3 mr-3' src={gitBar} alt="" srcset="" />
            </a>
        </div>
    </div>
  );
}

export default Navbar;
