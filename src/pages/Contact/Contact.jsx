import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useState } from 'react';

import ContactForm from '@/components/Forms/ContactForm';
import { contactUs } from '@/services/contactApi';
import toast from 'react-hot-toast';

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

const leftVariant = {
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

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleContactUs = async (formData) => {
    setIsLoading(true);
    try {
      await contactUs(formData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error(`Error: ${error.message}`);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  return (
    <motion.section
      id='contact-page'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className='tab:flex tab:gap-20 tab:items-center tab:justify-center px-5 xs:px-12 pt-12 pb-9 -mt-[117px] tab:mt-0'>
        <motion.div className='hidden tab:block' variants={leftVariant}>
          <div>
            <h2 className='text-purple-50 text-[2rem] font-semibold'>
              Get in touch
            </h2>
            <div className='flex flex-col gap-[17px]'>
              <p>
                Contact
                <br />
                Information
              </p>
              <p className='font-semibold'>
                27, Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
              </p>
              <p className='font-semibold'>Call Us : 07067981819</p>
              <p className=''>
                we are open from Monday-Friday
                <br />
                08:00am - 05:00pm
              </p>
            </div>
            <div className=' flex flex-col gap-[5px] mt-9'>
              <p className=' text-purple-50'>Share on</p>
              <div className='flex items-center gap-3'>
                <GrInstagram />
                <FaXTwitter color='white' />
                <FaFacebookF />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='tab:shadow-sm tab:w-1/2 tab:bg-[rgb(255_255_255/0.03)] tab:p-8 xl:py-16 xl:px-[90px]'
          variants={containerVariant}
        >
          <h1 className='text-purple-50 font-semibold text-xl mb-6'>
            Questions or need assistance? <br />
            Let us know about it
          </h1>
          <p className='text-xs mb-[30px]'>
            Email us below to any question related <br />
            to our event
          </p>
          <ContactForm loading={isLoading} onSubmit={handleContactUs} />
          <div className='mx-auto text-center flex items-center flex-col gap-[5px] mt-10 tab:hidden'>
            <p className='text-xm text-purple-50'>Share on</p>
            <div className='flex items-center gap-3'>
              <GrInstagram />
              <FaXTwitter color='white' />
              <FaFacebookF />
              <FaLinkedinIn />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
