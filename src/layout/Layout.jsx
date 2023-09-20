/* eslint-disable react/prop-types */
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <header className=''>
        <Navbar />
      </header>
      <div className=''>
        <main className=''>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
