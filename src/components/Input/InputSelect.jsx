import { Field, ErrorMessage } from 'formik';

const InputSelect = ({
  placeholder,
  label,
  id,
  name,
  options,
  setOption,
  value,
  ...rest
}) => {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor={id}
        className='text-sm lg:text-base mb-[3px] inline-block  dark:text-neutral-200  text-[#575555]'
      >
        {label || ''}
      </label>
      <Field
        as='select'
        id={id}
        name={name}
        value={value}
        {...rest}
        className='border border-input rounded-md px-[13px] py-3 outline-0 text-[#575555] leading-8'
        onChange={(event) => {
          setOption && setOption(event.target.value);
        }}
      >
        <option value='' className='text-[#575555] '>
          {placeholder || 'Select an option'}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className='text-[#575555]'>
            {option}
          </option>
        ))}
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
