import RegisterForm from '@/components/Forms/RegisterForm';
import Girl from '@/assets/images/girl-walking-emoji.png';
import Guy from '@/assets/images/guy-walking-emoji.png';

const Register = () => {
  return (
    <div className='px-12 pt-12 pb-9'>
      <div>
        <img />
      </div>
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
      <div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
