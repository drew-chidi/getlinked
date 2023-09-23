import axios from 'axios';
import toast from 'react-hot-toast';

import { BASE_URL } from '@/config/config';

export const getCategories = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/hackathon/categories-list`);
    return response.data;
  } catch (error) {
    toast.error('An error occurred while registering. Please try again later.');
    throw error;
  }
};
