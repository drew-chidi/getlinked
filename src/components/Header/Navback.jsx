import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const Navback = () => {
  return (
    <div className='px-5 xs:px-12 pt-12'>
      <Link to={'/'}>
        <BsChevronLeft
          className='border border-purple-50 rounded-full px-1.5 py-0.5'
          size={23}
        />{' '}
      </Link>
    </div>
  );
};

export default Navback;
