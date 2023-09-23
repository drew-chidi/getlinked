/* eslint-disable react/prop-types */
import Footer from '@/components/Footer/Footer';
import Navback from '@/components/Header/Navback';
import Navbar from '@/components/Header/Navbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const pathname = location?.pathname;

  const updateDisplay = () => {
    if (pathname === '/') {
      // Always show Navbar on the index page
      setShowNavbar(true);
    } else {
      // Show Navbar for larger screens and Navback for smaller screens
      setShowNavbar(window.innerWidth >= 960);
    }
  };

  useEffect(() => {
    updateDisplay();

    // Listen for resize events to update the display
    window.addEventListener('resize', updateDisplay);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateDisplay);
    };
  }, [pathname]);

  return (
    <div className='relative'>
      <header className='w-full'>
        {showNavbar ? <Navbar /> : <Navback />}
      </header>
      <div className={'mt-[117px]'}>
        <main className=''>{children}</main>
      </div>
      <footer>{pathname === '/' ? <Footer /> : null}</footer>
    </div>
  );
};

export default Layout;
