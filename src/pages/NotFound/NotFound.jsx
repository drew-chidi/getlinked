import React from 'react';
import Page404 from '../../assets/images/notfound-light.svg';

const NotFound = () => {
  return (
    <div>
      <div className='text-center m-auto'>
        <h1 className='text-4xl font-bold '>404</h1>
        <p className='lg:text-xl uppercase font-thin'>Sorry! Page not found</p>
      </div>
      <div className='w-[320px] m-auto'>
        <img src={Page404} alt='not-found' />
      </div>
    </div>
  );
};

export default NotFound;
