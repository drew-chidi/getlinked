import Partners from '@/assets/images/partners-and-sponsors.png';

const PartnersAndSponsors = () => {
  return (
    <div>
      <div className='py-28 flex flex-col gap-7 tab:gap-16'>
        <div className='flex justify-center gap-2.5 lg:gap-4 flex-col items-center text-center mt-[58px]'>
          <h2 className='text-xl font-bold leading-[26.6px] tab:text-[2rem]'>
            Partners and Sposors{' '}
          </h2>
          <p className='text-xs tab:text-sm sm:w-1/2'>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className='rounded-[5px] border border-purple-50 w-[75%] mx-auto max-w-[333px] tab:w-full tab:max-w-[1255px] py-10 px-12 tab:py-36 tab:px-44'>
          <img src={Partners} alt='rules and guidelines' className='mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default PartnersAndSponsors;
