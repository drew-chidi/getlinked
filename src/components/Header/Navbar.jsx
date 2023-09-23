import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import Menu from '@/assets/icons/menu.svg';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileNav((o) => !o);
  };

  return (
    <div className=''>
      <div className='fixed z-40 top-0 left-0 right-0 bg-[#150E28] px-12 sm:px-14 md:px-16 lg:px-24 2xl:px-28 pt-[34px] pb-6 flex justify-between items-center border-b border-[rgb(255_255_255/0.18)]'>
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
                <AnchorLink href='#timeline' className='cursor-pointer'>
                  Timeline
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href='#overview' className='cursor-pointer'>
                  Overview
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href='#faqs' className='cursor-pointer'>
                  FAQs
                </AnchorLink>
              </li>
              <li>
                <NavLink to='/contact' className='cursor-pointer'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <Button>
              <Link to='/register' className='cursor-pointer'>
                Register
              </Link>
            </Button>
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
                <AnchorLink
                  href='#timeline'
                  onClick={handleMobileMenu}
                  className='cursor-pointer'
                >
                  Timeline
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='#overtime'
                  onClick={handleMobileMenu}
                  className='cursor-pointer'
                >
                  Overview
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='#faqs'
                  onClick={handleMobileMenu}
                  className='cursor-pointer'
                >
                  FAQs
                </AnchorLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  onClick={handleMobileMenu}
                  className='cursor-pointer'
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='mt-7'>
            <Button>
              <Link to='/register' className='cursor-pointer'>
                Register
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
