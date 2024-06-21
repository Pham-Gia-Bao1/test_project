import { API_URL } from '@/utils/utils';
import axios from 'axios';

export const fetchFoodsData = async () => {
  const apiUrl = `${API_URL}/foods`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data; // Return fetched data
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error; // Rethrow error to handle it in the caller
  }
};
