import axios from 'axios';
import toast from 'react-hot-toast';

import { BASE_URL } from '@/config/config';

export const registerUser = async ({
  category,
  team_name,
  group_size,
  phone,
  terms,
  topic,
  email,
}) => {
  try {
    let response = await axios.post(`${BASE_URL}/hackathon/registration`, {
      email,
      phone_number: phone,
      team_name,
      group_size,
      project_topic: topic,
      category,
      privacy_poclicy_accepted: terms,
    });
    return response.data;
  } catch (error) {
    toast.error('An error occurred while registering. Please try again later.');
    throw error;
  }
};
