import Judges from '@/assets/images/judges.png';
import { keyAttributes } from '../../content';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

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

const JudgingCriteria = () => {
  return (
    <motion.section
      id='judging-criteria'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariant}
    >
      <div className='tab:flex tab:flex-row items-center tab:gap-[53px] w-full'>
        <div className='w-[75%] max-w-[332px] mx-auto tab:w-[55%] tab:max-w-[710px]'>
          <img src={Judges} alt='rules and guidelines' />
        </div>
        <div className=' flex justify-center gap-2.5 lg:gap-4 flex-col items-center text-center tab:mt-0 tab:text-left tab:items-start tab:w-[45%]'>
          <h2 className='text-xl font-bold tab:text-[2rem]'>
            <span>Judging Criteria</span>
            <br />
            <span className='text-purple-50'>Key attributes</span>
          </h2>
          <div className='flex flex-col gap-5'>
            {keyAttributes.map(({ id, attribute, description }) => (
              <div key={id} className='text-[0.8125rem] md:text-base'>
                <span className='text-[#FF26B9]'>{attribute}</span>
                <span>{description}</span>
              </div>
            ))}
          </div>
          <div className='tab:mt-9'>
            <Button>Read more</Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default JudgingCriteria;
