import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from '../app/constants';

export const getBooks = async () => {
  const { data } = await axios.get(API_URL + "/books");
  return data;
};

const useGetBooks = () => {
  return useQuery(['books/List'], getBooks);
};

export default useGetBooks;