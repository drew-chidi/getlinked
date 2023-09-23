/* eslint-disable react/prop-types */
import { Field, ErrorMessage } from 'formik';

const InputSelect = ({
  placeholder,
  label,
  id,
  name,
  options,
  value,
  loading,
}) => {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor={id}
        className='text-sm lg:text-base mb-1.5 inline-block dark:text-neutral-200 text-[#575555]'
      >
        {label || ''}
      </label>
      <Field
        as='select'
        id={id}
        name={name}
        value={value} // Value should be directly passed from Formik
        className='border border-input rounded-md px-[13px] py-3 outline-0 text-white leading-8 bg-transparent text-sm'
      >
        <option value='' className='text-[#575555]'>
          {placeholder || 'Select an option'}
        </option>
        {!loading ? (
          options.map(({ id, name }) => (
            <option key={id} value={name} className='text-[#575555]'>
              {name}
            </option>
          ))
        ) : (
          <option className='text-[#140D27] text-center py-4'>
            Loading...
          </option>
        )}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className='text-[12px] text-red-600 text-left flex gap-1 mt-2 font-normal leading-none'>
            {msg}
          </div>
        )}
      />
    </div>
  );
};

export default InputSelect;
