import Trophy from '@/assets/images/trophy.png';
import Rewards from '@/assets/images/rewards.png';

const Prizes = () => {
  return (
    <section id='prizes'>
      <div className='py-[72px]'>
        <div className='tab:grid tab:grid-cols-2'>
          <div></div>
          <div className='flex justify-center gap-2.5 lg:gap-4 flex-col items-center text-center tab:items-start tab:text-start'>
            <h2 className='text-xl font-bold leading-[26.6px] tab:text-[2rem]'>
              <span>Prices and</span>
              <br />
              <span className='text-purple-50'>Rewards</span>
            </h2>
            <p className='text-sm tab:w-3/5'>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>
        <div className='w-[75%] max-w-[321px] mx-auto mt-10 flex flex-col gap-12 tab:flex-row tab:w-full tab:max-w-none tab:gap-9'>
          <div className=' mx-auto max-w-[548px] '>
            <img src={Trophy} alt='rules and guidelines' />
          </div>
          <div className='mx-auto max-w-[760px] '>
            <img src={Rewards} alt='rules and guidelines' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
