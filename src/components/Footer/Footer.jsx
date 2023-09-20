import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn, FaRegCopyright } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { RiMapPin2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-20'>
      <p>
        Getlinked Tech Hackathon is a technology innovation program established
        by a group of organizations with the aim of showcasing young and
        talented individuals in the field of technology
      </p>
      <div>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>

      {/* Useful Links */}
      <div>
        <h2>Useful Links</h2>
        <ul>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>
        </ul>
      </div>
      <div className='flex items-center gap-4'>
        <h3>Follow us</h3>
        <GrInstagram />
        <FaXTwitter color='white' />
        <FaFacebookF />
        <FaLinkedinIn />
      </div>
      {/* Contact us */}
      <div>
        <h2>Contact Us</h2>
        <div>
          <BiSolidPhoneCall />
          <Link to='tel:+23467981819'>+234 679 81819</Link>
        </div>
        <div>
          <RiMapPin2Fill />
          <Link href='#'>
            {/* <Link href='#' onClick={openMapModal}> */}
            27, Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-2'>
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
