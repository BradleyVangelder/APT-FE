import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from '../app/constants';

export const getRandom = async () => {
  const { data } = await axios.get(API_URL + "/bookquotes/getrandombookquote");
  return data;
};

const useGetRandom = () => {
  return useQuery(["random/quote"], getRandom);
};

export default useGetRandom;