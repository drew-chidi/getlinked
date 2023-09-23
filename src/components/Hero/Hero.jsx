import { motion } from 'framer-motion';

import Chain from '@/assets/images/chain.png';
import Blast from '@/assets/images/blast.png';
import Man from '@/assets/images/man-wearing-glasses.png';
import Globe from '@/assets/images/connected-globe.png';
import Line from '@/assets/images/line.svg';
import Button from '../Button/Button';
import Bulb from '@/assets/images/light-bulb.png';

const containerVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3,
      delay: 0.3,
    },
  },
};

const imageVariant = {
  hidden: {
    y: 10,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3,
      delay: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      id='hero'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className='text-center pt-8 mb-0 w-full px-6 xs:px-9 sm:px-14 md:px-16 2xl:px-28 '>
        <div className='relative inline-flex justify-center tab:justify-end tab:flex tab:mb-10'>
          <p className='font-bold italic tab:text-4xl'>
            Igniting a Revolution in HR Innovation
            <img
              src={Line}
              className='absolute right-0 w-[115px] tab:w-[253px]'
            />
          </p>
        </div>
        <div className='relative flex flex-col gap-3 tab:flex-row w-full'>
          <motion.div className='tab:w-3/5' variants={containerVariant}>
            <div className='relative text-center tab:text-left font-display text-[2rem] md:text-4xl tab:text-6xl xl:text-7xl 2xl:text-[5rem] font-bold mt-14'>
              <div className='absolute right-[72px] -top-3 w-[18px] tab:w-[53px] h-[26px] tab:h-[73px]'>
                <img src={Bulb} />
              </div>
              <p className='leading-normal'>getlinked Tech</p>
              <div className='flex items-center justify-center tab:justify-start'>
                <p className='leading-normal'>
                  Hackathon <span className='text-[#D434FE]'>1.0</span>
                </p>
                <div className='w-8 tab:w-12'>
                  <img src={Chain} alt='chain' />
                </div>
                <div className='w-[22px] tab:w-10'>
                  <img src={Blast} alt='blast' />
                </div>
              </div>
            </div>
            <div className='tab:text-left'>
              <p className='text-[0.8125rem] lg:text-lg xl:text-xl mt-2.5 mb-6 tab:mb-10 tab:w-3/4'>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <Button>Register</Button>
            </div>
            <div className='font-unica flex gap-4 justify-center mt-3.5 tab:justify-start xl:mt-[77px] tab:mt-14 tab:mb-14 xl:mb-24'>
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
          </motion.div>
          {/* HERO IMAGE */}
          <motion.div
            className='tab:absolute right-0 bottom-0'
            variants={imageVariant}
            whileHover={{
              scale: 1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div className='relative max-w-[390px] tab:max-w-[480px] mx-auto'>
              {/* Larger image at the bottom */}
              <img
                src={Man}
                alt='Large Image'
                className='w-full h-full object-coveuior'
              />

              {/* Smaller image centered on top */}
              <div className='w-4/5 absolute inset-0 m-auto'>
                <img src={Globe} alt='Small Image' className='' />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
