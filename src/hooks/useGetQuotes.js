import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from '../app/constants';

export const getQuotes = async (isbn) => {
  const { data } = await axios.get(API_URL + "/bookquotes/" + isbn);
  return data;
};

const useGetQuotes = (isbn) => {
  return useQuery(['book/quotes'], () => getQuotes(isbn));
};

export default useGetQuotes;