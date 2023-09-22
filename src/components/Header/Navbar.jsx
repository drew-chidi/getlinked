import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import Menu from '@/assets/icons/menu.svg';
import { useState } from 'react';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileNav((o) => !o);
  };

  return (
    <div className=''>
      <div className='fixed z-40 top-0 left-0 right-0 bg-[#150E28] px-12 pt-[34px] pb-6 flex justify-between items-center border-b border-[rgb(255_255_255/0.18)]'>
        {/* Company Logo */}
        <div>
          <NavLink className={'text-white font-bold'} to={'/'}>
            get<span className={'text-[#D434FE] '}>linked</span>
          </NavLink>
        </div>
        {/* Navlinks for Large screens */}
        <div className='hidden tab:flex items-center gap-28 justify-between'>
          <nav>
            <ul className='flex items-center md:gap-8 lg:gap-14'>
              <li>
                <NavLink to='#timeline'>Timeline</NavLink>
              </li>
              <li>
                <NavLink to='#timeline'>Overview</NavLink>
              </li>
              <li>
                <NavLink to='#timeline'>FAQs</NavLink>
              </li>
              <li>
                <NavLink to='#timeline'>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <Button>Register</Button>
          </div>
        </div>
        <button onClick={handleMobileMenu} className='tab:hidden'>
          <img src={Menu} alt='menu-icon' />
        </button>
      </div>
      {/* Mobile Menu */}
      {showMobileNav && (
        <div className='py-9 px-11 tab:hidden fixed bg-[#150E28] w-full min-h-screen top-0 z-50'>
          <div
            className='flex justify-end mb-14'
            onClick={() => setShowMobileNav(false)}
          >
            <AiOutlineClose
              size={23}
              className='border rounded-full border-purple-50 px-1'
            />
          </div>
          <nav>
            <ul className='flex flex-col gap-6 sm:gap-8 text-lg'>
              <li>
                <NavLink to='#timeline' onClick={handleMobileMenu}>
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to='#timeline' onClick={handleMobileMenu}>
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to='#timeline' onClick={handleMobileMenu}>
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to='#timeline' onClick={handleMobileMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='mt-7'>
            <Button>Register</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
