import axios from 'axios';
import toast from 'react-hot-toast';

import { BASE_URL } from '@/config/config';

export const contactUs = async ({ team_name, topic, email, message }) => {
  try {
    let response = await axios.post(`${BASE_URL}/hackathon/contact-form`, {
      email,
      team_name,
      project_topic: topic,
      message,
    });
    return response.data;
  } catch (error) {
    toast.error('An error occurred while sending. Please try again later.');
    throw error;
  }
};
