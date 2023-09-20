import RegisterForm from '@/components/Forms/RegisterForm';

const Register = () => {
  return (
    <div className='px-12 pt-12 pb-9'>
      <div>
        <img />
      </div>
      <div>
        <div>
          <div>Be part of this movement!</div>
        </div>
        <h1 className='text-purple-50 font-semibold text-xl mb-6 uppercase'>
          Create your account
        </h1>
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
