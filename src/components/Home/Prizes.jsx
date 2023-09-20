import Trophy from '@/assets/images/trophy.png';
import Rewards from '@/assets/images/rewards.png';

const Prizes = () => {
  return (
    <div>
      <div className=''>
        <div className='flex justify-center gap-2.5 lg:gap-4 flex-col items-center text-center mt-[58px]'>
          <h2 className='text-xl font-bold leading-[26.6px]'>
            <span>Prices and</span>
            <br />
            <span className='text-purple-50'>Rewards</span>
          </h2>
          <p className='text-sm'>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div>
          <div className='w-[75%] mx-auto'>
            <img src={Trophy} alt='rules and guidelines' />
          </div>
          <div className='w-[75%] mx-auto'>
            <img src={Rewards} alt='rules and guidelines' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
