import axios from 'axios';
import toast from 'react-hot-toast';

import { BASE_URL } from '@/config/config';

export const contactUs = async ({
  first_name,
  phone_number,
  email,
  message,
}) => {
  try {
    let response = await axios.post(`${BASE_URL}/hackathon/contact-form`, {
      email,
      phone_number,
      first_name,
      message,
    });
    return response.data;
  } catch (error) {
    toast.error('An error occurred while sending. Please try again later.');
    throw error;
  }
};
