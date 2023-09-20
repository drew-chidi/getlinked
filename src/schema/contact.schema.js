import * as Yup from 'yup';

export const initialContactValues = {
  name: '',
  topic: '',
  email: '',
  message: '',
};

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Enter your team's name"),
  topic: Yup.string().required('Enter a topic'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  message: Yup.string().required("You haven't written any message"),
});
