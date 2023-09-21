import { Formik, Form } from 'formik';
import InputBox from '../Input/InputBox';
import {
  RegisterSchema,
  initialRegisterValues,
} from '@/schema/register.schema';
import InputSelect from '../Input/InputSelect';
import InputCheckbox from '../Input/InputCheckbox';
import Button from '../Button/Button';
import { useState } from 'react';

const categoryOptions = ['Category 1', 'Category 2'];
const groupSize = ['1', '2'];

const RegisterForm = () => {
  const [, setOption] = useState('');

  const handleOption = (value) => {
    setOption(value);
  };
  const handleSubmit = () => {
    console.log('eueui');
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
        enableReinitialize
        initialValues={initialRegisterValues}
      >
        {({
          values,
          setFieldTouched,
          isValid,
          setFieldValue,
          errors,
          handleSubmit,
          ...formik
        }) => (
          <Form>
            <div className='flex flex-col gap-6'>
              <InputBox
                label={"Team's Name"}
                placeholder={'Enter the name of your group'}
                id={'team_name'}
                name={'team_name'}
                value={values?.team_name}
                isValid={values?.team_name && !errors?.team_name}
                setFieldTouched={setFieldTouched}
              />
              <InputBox
                label={'Phone'}
                placeholder={'Enter your phone number'}
                id={'phone'}
                name={'phone'}
                value={values?.phone}
                isValid={values?.phone && !errors?.phone}
                setFieldTouched={setFieldTouched}
              />
              <InputBox
                label={'Email'}
                placeholder={'Enter your email address'}
                type={'email'}
                id={'email'}
                name={'email'}
                value={values?.email}
                isValid={values?.email && !errors?.email}
                setFieldTouched={setFieldTouched}
              />
              <InputBox
                label={'Project Topic'}
                placeholder={'What is your group project topic?'}
                id={'topic'}
                name={'topic'}
                value={values?.topic}
                isValid={values?.topic && !errors?.topic}
                setFieldTouched={setFieldTouched}
              />
              <div className='flex gap-5 w-full'>
                <div className='w-[64%]'>
                  <InputSelect
                    label={'Category'}
                    placeholder={'Select your category?'}
                    id={'category'}
                    name={'category'}
                    value={values?.category}
                    isValid={values?.category && !errors?.category}
                    setFieldTouched={setFieldTouched}
                    options={categoryOptions}
                    handleSubmit={handleSubmit}
                    setOption={handleOption}
                  />
                </div>
                <div className='w-[36%]'>
                  <InputSelect
                    label={'Group Size'}
                    placeholder={'Select'}
                    id={'group_size'}
                    name={'group_size'}
                    value={values?.group_size}
                    isValid={values?.group_size && !errors?.group_size}
                    setFieldTouched={setFieldTouched}
                    options={groupSize}
                  />
                </div>
              </div>
            </div>
            <p className='text-[0.5625rem] text-purple-50 mt-4 mb-3'>
              Please review your registration details before submitting
            </p>
            {/* Terms and Conditions */}
            <div>
              <InputCheckbox
                title='I agreed with the event terms and conditions and privacy policy'
                id={'terms'}
                name={'terms'}
                value={values?.terms}
                isValid={values?.terms && !errors?.terms}
                setFieldTouched={setFieldTouched}
              />
            </div>
            {/* button here */}
            <div className='text-center'>
              <Button type='submit'>Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
