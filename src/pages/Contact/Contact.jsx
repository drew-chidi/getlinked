import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import ContactForm from '@/components/Forms/ContactForm';

const Contact = () => {
  return (
    <div className='px-5 xs:px-12 pt-12 pb-9 -mt-[117px] md:mt-0'>
      <h1 className='text-purple-50 font-semibold text-xl mb-6'>
        Questions or need assistance? <br />
        Let us know about it
      </h1>
      <p className='text-xs mb-[30px]'>
        Email us below to any question related <br />
        to our event
      </p>
      <ContactForm />
      <div className='mx-auto text-center flex items-center flex-col gap-[5px] mt-10'>
        <p className='text-xm text-purple-50'>Share on</p>
        <div className='flex items-center gap-3'>
          <GrInstagram />
          <FaXTwitter color='white' />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Contact;
