import { timeline } from '@/content';
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
const Timeline = () => {
  return (
    <motion.section
      id='timeline'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariant}
    >
      <div className='pb-[72px]'>
        <div className='flex flex-col justify-center gap-5 lg:gap-4 items-center text-center mt-[58px]'>
          <h2 className='text-xl font-bold leading-[26.6px] tab:text-[2rem]'>
            Timeline
          </h2>
          <p className='text-sm'>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        {/* Timeline Mobile*/}
        <div className='flex flex-col gap-6 mt-14 tab:hidden'>
          {timeline.map(({ id, title, description, date }) => (
            <div key={id} className='flex gap-5'>
              <div className='inline-flex justify-center flex-col items-center gap-2'>
                <div className='h-[77px] w-[2px] bg-purple-50'></div>
                <p
                  className='rounded-full inline-flex justify-center items-center text-xs w-[19.32px] h-[19.32px]'
                  style={{
                    background:
                      'linear-gradient(270deg, #903AFF 0%, #D434FE 100%)',
                  }}
                >
                  {id}
                </p>
              </div>
              <div className='flex flex-col justify-between gap-[7px]'>
                <div>
                  <p className='text-purple-50 text-xs mb-[7px]'>{title}</p>
                  <p className='text-xs'>{description}</p>
                </div>
                <p className='text-purple-50 text-xs'>{date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline for larger screens */}
        <div className='hidden tab:flex flex-col gap-3 mt-[91px]'>
          {timeline.map(({ id, title, description, date }) => (
            <div
              key={id}
              className={`flex items-end justify-center gap-10 xl:gap-20 2xl:gap-[86px] ${
                id % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className='w-1/2'>
                <p className='text-purple-50 text-2xl mb-[7px]'>{title}</p>
                <p className='text-sm'>{description}</p>
              </div>
              <div className='inline-flex justify-center flex-col items-center gap-2 w-auto'>
                <div className='h-[77px] w-[2px] bg-purple-50'></div>
                <p
                  className='rounded-full inline-flex justify-center items-center text-2xl w-[53px] h-[53px]'
                  style={{
                    background:
                      'linear-gradient(270deg, #903AFF 0%, #D434FE 100%)',
                  }}
                >
                  {id}
                </p>
              </div>
              <p className='text-purple-50 text-2xl w-1/2'>{date}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Timeline;
