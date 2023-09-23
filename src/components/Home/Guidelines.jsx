import Lady from '@/assets/images/lady-sitting.png';
import { motion } from 'framer-motion';

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
const Guidelines = () => {
  return (
    <motion.section
      id='guidelines'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariant}
    >
      <div className='tab:flex tab:flex-row-reverse tab:gap-12 w-full'>
        <div className='w-[75%] mx-auto tab:w-[44.5%] tab:max-w-[664px]'>
          <img src={Lady} alt='rules and guidelines' />
        </div>
        <div className='tab:w-[55.5%] flex justify-center gap-2 lg:gap-4 flex-col items-center text-center mt-2.5 tab:mt-0 tab:text-left tab:items-start'>
          <h2 className='text-xl font-bold tab:text-[2rem]'>
            <span>Rules and</span>
            <br />
            <span className='text-purple-50'>Guidelines</span>
          </h2>
          <p className='text-sm'>{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Guidelines;
