import { Field } from 'formik';

const InputCheckbox = ({ title, name, value }) => {
  return (
    <div className='flex items-start justify-between gap-2.5 pb-5'>
      <Field
        type={'checkbox'}
        name={name}
        value={value}
        className='mt-0.5 focus:outline-none border rounded-sm transition-all ease-in duration-200 w-3.5 h-3.5 bg-transparent  appearance-none flex-none'
      />
      <label htmlFor={name} className=' text-white text-[0.625rem]'>
        {title}
      </label>
    </div>
  );
};

export default InputCheckbox;
