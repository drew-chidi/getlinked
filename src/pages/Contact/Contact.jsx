import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import ContactForm from '@/components/Forms/ContactForm';
import { useState } from 'react';
import { contactUs } from '@/services/contactApi';
import toast from 'react-hot-toast';

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
    <section id='contact-page'>
      <div className='tab:flex tab:gap-20 tab:items-center tab:justify-center px-5 xs:px-12 pt-12 pb-9 -mt-[117px] md:mt-0'>
        <div className='hidden tab:block'>
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
        </div>
        <div className='tab:shadow-sm tab:w-1/2 tab:bg-[rgb(255_255_255/0.03)] tab:p-8 xl:py-16 xl:px-[90px]'>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
