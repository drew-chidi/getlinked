import Chain from '@/assets/images/chain.png';
import Blast from '@/assets/images/blast.png';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='text-center pt-7'>
        <div>
          <p className='font-bold italic'>
            Igniting a Revolution in HR Innovation
          </p>
        </div>
        <div className='text-center font-display text-[2rem] font-bold mt-10'>
          <p className='leading-normal'>getlinked Tech</p>
          <div className='flex items-center justify-center'>
            <p className='leading-normal'>
              Hackathon <span className='text-[#D434FE]'>1.0</span>
            </p>
            <div className='w-8'>
              <img src={Chain} alt='chain' />
            </div>
            <div className='w-[22px]'>
              <img src={Blast} alt='blast' />
            </div>
          </div>
        </div>
        <p className='text-[0.8125rem] lg:text-xl mt-2.5 mb-6'>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <button className='text-primary text-sm'>Register</button>
        <div className='font-unica flex gap-4 justify-center mt-3.5'>
          <div className=''>
            <span className='text-5xl leading-[63.84px]'>00</span>
            <span className='text-sm font-sans'>H</span>
          </div>
          <div className=''>
            <span className='text-5xl leading-[63.84px]'>00</span>
            <span className='text-sm font-sans'>M</span>
          </div>
          <div className=''>
            <span className='text-5xl leading-[63.84px]'>00</span>
            <span className='text-sm font-sans'>S</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
