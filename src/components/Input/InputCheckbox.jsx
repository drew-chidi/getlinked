/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik';

const InputCheckbox = ({ title, name }) => {
  return (
    <div className='pb-5'>
      <div className='flex items-start justify-start gap-2.5'>
        <Field
          type='checkbox'
          name={name}
          className='mt-0.5 focus:outline-none border rounded-sm transition-all ease-in duration-200 w-3.5 h-3.5 flex-none'
        />
        <label htmlFor={name} className='text-white text-[0.625rem]'>
          {title}
        </label>
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className='text-[12px] text-red-600 text-left flex gap-1 mt-2 font-normal'>
            {msg}
          </div>
        )}
      />
    </div>
  );
};

export default InputCheckbox;
