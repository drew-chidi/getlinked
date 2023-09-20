import { Form, Formik } from 'formik';
import InputBox from '../Input/InputBox';
import TextArea from '../Input/TextArea';
import { ContactSchema, initialContactValues } from '@/schema/contact.schema';

const ContactForm = () => {
  const handleSubmit = () => {};

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
                placeholder={"Team's Name"}
                id={'name'}
                name={'name'}
                value={values?.name}
                isValid={values?.name && !errors?.name}
                setFieldTouched={setFieldTouched}
              />
              <InputBox
                placeholder={'Topic'}
                id={'topic'}
                name={'topic'}
                value={values?.topic}
                isValid={values?.topic && !errors?.topic}
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
            </div>
            {/* button here */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
