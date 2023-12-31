import Idea from '@/assets/images/big-idea.png';
import { motion } from 'framer-motion';

const Introduction = () => {
  const containerVariant = {
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

  const imageVariant = {
    hidden: {
      x: 10,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 3,
        delay: 0.3,
      },
    },
  };
  return (
    <motion.section
      id='overview'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className='mx-auto tab:flex tab:flex-row tab:gap-28 w-full items-center'>
        <motion.div
          className='w-[85%] max-w-[264px] mx-auto tab:mx-0  tab:w-[48%] tab:max-w-[490px]'
          variants={imageVariant}
          whileHover={{
            scale: 1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={Idea} alt='the big idea' className='mx-auto tab:mx-0' />
        </motion.div>
        <motion.div
          className='tab:w-[52%] flex justify-center gap-2 lg:gap-4 flex-col items-center text-center mt-[58px] tab:mt-0 tab:text-left tab:items-start'
          variants={containerVariant}
        >
          <h2 className='text-xl font-bold leading-[26.6px] tab:text-[2rem]'>
            <span>Introduction to getlinked</span>
            <br />
            <span className='text-purple-50'>tech Hackathon 1.0</span>
          </h2>
          <p className='text-sm'>{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Introduction;
