/* eslint-disable react/prop-types */
import { Form, Formik } from 'formik';
import InputBox from '../Input/InputBox';
import TextArea from '../Input/TextArea';
import { ContactSchema, initialContactValues } from '@/schema/contact.schema';
import Button from '../Button/Button';
import ButtonSpinner from '../Loader/ButtonSpinner';

const ContactForm = ({ loading, onSubmit }) => {
  const handleSubmit = (formData) => {
    onSubmit(formData);
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
        enableReinitialize
        initialValues={initialContactValues}
      >
        {({ values, setFieldTouched, errors }) => (
          <Form>
            <div className='flex flex-col gap-6'>
              <InputBox
                label={''}
                placeholder={'First Name'}
                id={'first_name'}
                name={'first_name'}
                first_name={'first_name'}
                value={values?.first_name}
                isValid={values?.first_name && !errors?.first_name}
                setFieldTouched={setFieldTouched}
              />
              <InputBox
                placeholder={'Phone'}
                id={'phone_number'}
                name={'phone_number'}
                value={values?.phone_number}
                isValid={values?.phone_number && !errors?.phone_number}
                setFieldTouched={setFieldTouched}
              />
              <InputBox
                placeholder={'Email'}
                type={'email'}
                id={'email'}
                name={'email'}
                value={values?.email}
                isValid={values?.email && !errors?.email}
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
              <div className='text-center tab:flex tab:w-full'>
                <Button type='submit' className='tab:w-full'>
                  {loading ? <ButtonSpinner /> : 'Submit'}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
