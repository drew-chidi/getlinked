import React from 'react';

const PartnersAndSponsors = () => {
  return (
    <div>
      <div className=''>
        <div className='w-[75%] mx-auto'>
          <img src={Lady} alt='rules and guidelines' />
        </div>
        <div className='flex justify-center gap-2.5 lg:gap-4 flex-col items-center text-center mt-[58px]'>
          <h2 className='text-xl font-bold leading-[26.6px]'>
            Partners and Sposors{' '}
          </h2>
          <p className='text-xs'>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersAndSponsors;
