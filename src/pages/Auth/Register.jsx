import { useState } from 'react';
import toast from 'react-hot-toast';

import RegisterForm from '@/components/Forms/RegisterForm';
import Girl from '@/assets/images/girl-walking-emoji.png';
import Guy from '@/assets/images/guy-walking-emoji.png';
import Designer from '@/assets/images/designer-showing-thumbs-up.png';
import SuccessfulEntryModal from '@/components/Modal/SuccessfulEntryModal';
import { registerUser } from '@/services/authApi';

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRegister = async (formData) => {
    try {
      const response = await registerUser(formData);
      setShowModal(true);
      console.log(response);
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='px-5 xs:px-12 pt-12 pb-9 -mt-[117px] md:mt-0'>
      <SuccessfulEntryModal open={showModal} closeModal={handleCloseModal} />
      <div className='tab:flex tab:items-center'>
        <div className='max-w-[195px] tab:w-1/2 tab:max-w-[717px] mx-auto'>
          <img src={Designer} alt='' />
        </div>
        <div className='tab:w-1/2 tab:bg-[rgb(255_255_255/0.03)] tab:p-8'>
          <div>
            <div className='mb-[7px] flex items-end gap-1.5'>
              <p className='text-xs'>Be part of this movement!</p>
              <div className='border-b border-purple-50 w-[101px] border-dashed text-center flex justify-center'>
                <img src={Girl} />
                <img src={Guy} />
              </div>
            </div>
            <h1 className='text-xl mb-6 uppercase'>Create your account</h1>
          </div>
          <div className=''>
            <RegisterForm onSubmit={handleRegister} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
