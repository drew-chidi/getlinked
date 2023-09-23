import * as Yup from 'yup';

export const initialContactValues = {
  first_name: '',
  phone_number: '',
  email: '',
  message: '',
};

export const ContactSchema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .required('First name is required')
    .min(2, 'First name should be at least 2 characters'),
  phone_number: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, 'Phone number should only contain digits')
    .min(10, 'Phone number should be at least 10 digits')
    .max(15, 'Phone number should not exceed 15 digits')
    .required('Phone number is required'),
  email: Yup.string()
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),
  message: Yup.string().required("You haven't written any message"),
});
