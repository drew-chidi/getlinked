/* eslint-disable react/prop-types */
import Navbar from '../components/Header/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <header className=''>
        <Navbar />
      </header>
      <div className=''>
        <main className=''>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
