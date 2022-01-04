import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from '../app/constants';

export const getBeforeGuess = async () => {
  const { data } = await axios.get(API_URL + "/bookquotes/beforeguess");
  return data;
};

const useGetBeforeGuess = () => {
  return useQuery(["beforeguess/"], getBeforeGuess);
};

export default useGetBeforeGuess;