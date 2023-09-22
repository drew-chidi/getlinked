/* eslint-disable react/prop-types */
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const pathname = location?.pathname;
  return (
    <div className='relative'>
      <header className='w-full'>
        <Navbar />
      </header>
      <div className='mt-[117px]'>
        <main className=''>{children}</main>
      </div>
      <footer>{pathname === '/' ? <Footer /> : null}</footer>
    </div>
  );
};

export default Layout;
