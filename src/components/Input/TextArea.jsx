/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik';

const TextArea = ({
  placeholder,
  label,
  setFieldTouched,
  name,
  value,
  type,
  id,
}) => {
  return (
    <div className='inline-flex flex-col'>
      <label
        htmlFor={id}
        className='mb-1.5 inline-block  dark:text-neutral-200 text-[0.8125rem] md:text-sm'
      >
        {label || ''}
      </label>
      <Field
        as={'textarea'}
        rows={4}
        column={30}
        name={name}
        value={value || ''}
        onKeyUp={() => {
          setFieldTouched(name, true);
        }}
        className='bg-transparent shadow-input border border-white rounded-[4px] px-6 py-3.5 outline-0 text-white text-sm'
        type={type}
        id={id}
        placeholder={placeholder}
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

export default TextArea;
