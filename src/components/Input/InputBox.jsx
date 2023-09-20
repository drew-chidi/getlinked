/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik';

const InputBox = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  setFieldTouched,
  handleSubmit,
}) => {
  return (
    <div className='inline-flex flex-col'>
      <label
        htmlFor={id}
        className='mb-[3px] inline-block  dark:text-neutral-200'
      >
        {label || ''}
      </label>
      <Field
        className='border border-input rounded-md px-[13px] py-3 outline-0 text-[#575555]'
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value || ''}
        onKeyUp={(e) => {
          setFieldTouched(name, true);
          e.key === 'Enter' && handleSubmit();
        }}
      />
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

export default InputBox;
