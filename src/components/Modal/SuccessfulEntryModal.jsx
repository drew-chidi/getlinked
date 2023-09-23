/* eslint-disable react/prop-types */
import ControlledModal from './ControlledModal';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Congratulation from '@/assets/images/congratulation.png';

const SuccessfulEntryModal = ({ open, closeModal }) => {
  const navigate = useNavigate();
  const contentStyle = {
    maxHeight: '566px',
    borderRadius: '25px',
    backgroundColor: 'white',
    width: 'fit-content',
    boxShadow: 'none',
    overflow: 'hidden',
    margin: 'auto',
    maxWidth: '530px',
  };

  const closeModalHandler = () => {
    closeModal();
  };
  return (
    <ControlledModal
      open={open}
      closeModal={closeModalHandler}
      contentStyle={contentStyle}
    >
      <div className='relative text-center border rounded-[5px] border-purple-50'>
        <div className='mx-auto p-6 lg:py-36 text-center flex flex-col gap-7 items-center'>
          <div className='max-w-[427px]'>
            <img src={Congratulation} />{' '}
          </div>
          <div className='flex flex-col gap-7 items-center'>
            <p className='font-semibold'>
              Congratulations you have successfully Registered!
            </p>
            <p className='text-xs font-medium'>
              Yes, it was easy and you did it! check your mail box for next step{' '}
            </p>
            <Button type='button'>
              <Link to='/'>Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </ControlledModal>
  );
};

export default SuccessfulEntryModal;
