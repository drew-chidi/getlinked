import Audience from '@/assets/images/audience-man.png';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsDashCircle } from 'react-icons/bs';
import { faqsContent } from '../../content';
import { useState } from 'react';

const Faq = () => {
  const [questionId, setQuestionId] = useState(null);

  const handleAccordion = (id) => {
    setQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className=''>
        <div className='flex justify-center gap-2.5 lg:gap-4 flex-col items-center text-center mt-[58px]'>
          <h2 className='text-xl font-bold leading-[26.6px]'>
            <span>Frequently Ask</span>
            <br />
            <span className='text-purple-50'>Question</span>
          </h2>
          <div className='text-xs'>
            <span>
              We got answers to the questions that you might want to ask about
            </span>
            <span className='font-bold'> getlinked Hackathon 1.0</span>
          </div>
        </div>
        {/* ACCORDIONS */}
        <div className='grid grid-cols-1 gap-12  sm:grid-cols-1 md:grid-cols-2 lg:gap-x-36 lg:gap-y-10 '>
          {faqsContent?.map(({ id, question, answer }) => {
            return (
              <div key={id} className='border-b border-gray-text'>
                <div className='flex items-center justify-between gap-4 md:gap-0'>
                  <span className='font-medium text-primary xl:text-2xl'>
                    {question}
                  </span>
                  <span onClick={() => handleAccordion(id)}>
                    <span>
                      <AiOutlinePlus
                        size={24}
                        className={` ${questionId === id ? 'hidden' : 'block'}`}
                      />
                    </span>
                    <span>
                      <BsDashCircle
                        size={22}
                        className={` ${questionId === id ? 'block' : 'hidden'}`}
                      />
                    </span>
                  </span>
                </div>
                <div className=' mt-10'>
                  <p className={` ${questionId === id ? 'block' : 'hidden'}`}>
                    <span>{answer}</span>
                    {/* <a className='text-primary' href='mailto:help@zojapay.com'>
                      {content.link}
                    </a> */}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Image */}
        <div className='w-[75%] mx-auto'>
          <img src={Audience} alt='rules and guidelines' />
        </div>
      </div>
    </div>
  );
};

export default Faq;
