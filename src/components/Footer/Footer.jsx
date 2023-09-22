import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn, FaRegCopyright } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { RiMapPin2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-12 py-[50px]'>
      <div className='md:flex md:justify-center md:gap-4 tab:gap-8 xl:gap-16'>
        <div className='md:w-[40%]'>
          <div className=''>
            {/* Company Logo */}
            <div className='mb-3'>
              <Link className={'text-white font-bold text-xl '} to={'/'}>
                get<span className={'text-[#D434FE] '}>linked</span>
              </Link>
            </div>
            <p className='text-xs leading-[172.4%]'>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className='flex gap-2 items-center mt-10 mb-8 text-xs'>
            <p>Terms of Use</p>
            <div className='h-4 w-[2px] bg-purple-50'></div>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className=''>
          {/* Useful Links */}
          <div className='mb-[18px]'>
            <h2 className='text-purple-50 mb-1.5 text-sm font-semibold'>
              Useful Links
            </h2>
            <ul className='flex flex-col gap-3 text-xs'>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
          </div>
          <div className='flex items-center gap-4 mb-[61px]'>
            <h3 className='text-xs text-purple-50'>Follow us</h3>
            <GrInstagram />
            <FaXTwitter color='white' />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>
        {/* Contact us */}
        <div className=''>
          <h2 className='text-purple-50 mb-2 text-sm font-semibold'>
            Contact Us
          </h2>
          <div className='flex items-start gap-4 mb-[26px]'>
            <BiSolidPhoneCall />
            <Link to='tel:+23467981819' className='text-xs'>
              +234 679 81819
            </Link>
          </div>
          <div className='flex items-start gap-4'>
            <RiMapPin2Fill />
            <Link href='#' className='text-xs'>
              {/* <Link href='#' onClick={openMapModal}> */}
              27, Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </Link>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-[60px] text-xs justify-center'>
        <p>All rights reserved.</p>
        <div className='flex items-center gap-2'>
          <FaRegCopyright />
          <p>getlinked Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
