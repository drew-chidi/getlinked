import { Formik } from 'formik';
import { Form } from 'react-router-dom';
import InputBox from '../Input/InputBox';
import TextArea from '../Input/TextArea';
import {
  RegisterSchema,
  initialRegisterValues,
} from '@/schema/register.schema';

const RegisterForm = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
        enableReinitialize
        initialValues={initialRegisterValues}
      >
        {({ values, setFieldTouched, errors }) => (
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
                placeholder={'Enter your phone number'}
                label={'Phone'}
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
              <TextArea
                placeholder={'Message'}
                type={'message'}
                id={'message'}
                name={'message'}
                value={values?.message}
                isValid={values?.message && !errors?.message}
                setFieldTouched={setFieldTouched}
              />
            </div>
            <p className='text-[0.5625rem] text-purple-50 mt-4 mb-3'>
              Please review your registration details before submitting
            </p>
            {/* Terms and Conditions */}
            <div></div>
            {/* button here */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
