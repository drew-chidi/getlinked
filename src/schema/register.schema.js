import * as Yup from 'yup';

export const initialRegisterValues = {
  team_name: '',
  phone: '',
  email: '',
  topic: '',
  category: '',
  group_size: '',
};

export const RegisterSchema = Yup.object().shape({
  team_name: Yup.string()
    .trim()
    .required('Team name is required')
    .min(2, 'Team name should be at least 2 characters'),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, 'Phone number should only contain digits')
    .min(10, 'Phone number should be at least 10 digits')
    .max(15, 'Phone number should not exceed 15 digits')
    .required('Phone number is required'),
  email: Yup.string()
    .trim()
    .email('Enter a valid email address')
    .required('Email is required'),
  topic: Yup.string()
    .trim()
    .required('Topic is required')
    .min(2, 'Topic should be at least 2 characters'),
  category: Yup.string().trim().required('Category is required'),
  group_size: Yup.number()
    .integer('Group size should be a whole number')
    .min(1, 'Group size should be at least 1')
    .required('Group size is required'),
});
