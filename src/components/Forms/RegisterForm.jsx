/* eslint-disable react/prop-types */
import { Formik, Form } from 'formik';
import { useEffect } from 'react';
import InputBox from '../Input/InputBox';
import {
  RegisterSchema,
  initialRegisterValues,
} from '@/schema/register.schema';
import InputSelect from '../Input/InputSelect';
import InputCheckbox from '../Input/InputCheckbox';
import { useState } from 'react';
import Button from '../Button/Button';
import { getCategories } from '@/services/categoryApi';
import toast from 'react-hot-toast';

const groupSize = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
];

const RegisterForm = ({ onSubmit }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      let response = await getCategories();
      setCategories(response);
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = (formData) => {
    const { category } = formData;
    // Find the option object with a matching name
    const matchingOption = categories.find(
      (option) => option.name === category
    );
    // If a matching option is found, update the category property with its id
    const formattedData = { ...formData, category: matchingOption.id };
    onSubmit(formattedData);
  };

  return (
    <div className=''>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
        enableReinitialize
        initialValues={initialRegisterValues}
      >
        {({ values, setFieldTouched, errors, handleSubmit }) => (
          <Form>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-6 xl:grid xl:grid-cols-2'>
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
              </div>
              <div className='flex flex-col gap-6 xl:grid xl:grid-cols-2'>
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
              </div>
              <div className='flex gap-5 w-full xl:grid xl:grid-cols-2'>
                <div className='w-[64%] tab:w-full'>
                  <InputSelect
                    label={'Category'}
                    placeholder={'Select your category?'}
                    id={'category'}
                    name={'category'}
                    value={values?.category}
                    isValid={values?.category && !errors?.category}
                    setFieldTouched={setFieldTouched}
                    options={categories}
                    handleSubmit={handleSubmit}
                    loading={loading}
                  />
                </div>
                <div className='w-[36%] tab:w-full'>
                  <InputSelect
                    label={'Group Size'}
                    placeholder={'Select'}
                    id={'group_size'}
                    name={'group_size'}
                    value={values?.group_size}
                    isValid={values?.group_size && !errors?.group_size}
                    setFieldTouched={setFieldTouched}
                    options={groupSize}
                    loading={loading}
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
            <div className='text-center tab:flex tab:w-full'>
              <Button type='submit' className='tab:w-full'>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
