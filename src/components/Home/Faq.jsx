import { motion } from 'framer-motion';

import Audience from '@/assets/images/audience-man.png';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsDashCircle } from 'react-icons/bs';
import { faqsContent } from '../../content';
import { useState } from 'react';

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

const picsVariant = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Faq = () => {
  const [questionId, setQuestionId] = useState(null);

  const handleAccordion = (id) => {
    setQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <motion.section
      id='faq'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariant}
    >
      <div className='tab:flex tab:flex-row tab:gap-6 w-full items-center'>
        <div className='tab:w-[45%]'>
          <div className='flex justify-center gap-1.5 lg:gap-4 flex-col items-center text-center mt-[58px] tab:text-left tab:items-start'>
            <h2 className='text-xl font-bold leading-[26.6px] tab:text-[2rem]'>
              <span>Frequently Ask</span>
              <br />
              <span className='text-purple-50'>Question</span>
            </h2>
            <div className='text-xs leading-[229.2%]'>
              <span>
                We got answers to the questions that you might want to ask about
              </span>
              <span className='font-bold'> getlinked Hackathon 1.0</span>
            </div>
          </div>
          {/* ACCORDIONS */}
          <div className='grid grid-cols-1 gap-12 lg:gap-x-36 lg:gap-y-10 mt-11 tab:mt-[68px] '>
            {faqsContent?.map(({ id, question, answer }) => {
              return (
                <div key={id} className='border-b border-purple-50'>
                  <div className='flex items-center justify-between gap-4 md:gap-0'>
                    <span className='font-medium text-primary text-xs tab:text-sm'>
                      {question}
                    </span>
                    <span onClick={() => handleAccordion(id)}>
                      <span>
                        <AiOutlinePlus
                          size={9}
                          className={` ${
                            questionId === id ? 'hidden' : 'block'
                          } text-purple-50`}
                        />
                      </span>
                      <span>
                        <BsDashCircle
                          size={22}
                          className={` ${
                            questionId === id ? 'block' : 'hidden'
                          } text-purple-50`}
                        />
                      </span>
                    </span>
                  </div>
                  <p className={` ${questionId === id ? 'block' : 'hidden'}`}>
                    <span>{answer}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Image */}
        <motion.div
          className='w-[85%] max-w-[327px] mx-auto mt-[86px] tab:mt-0 tab:w-[55%] tab:max-w-[741px]'
          variants={picsVariant}
        >
          <img src={Audience} alt='rules and guidelines' />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Faq;
