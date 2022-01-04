import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { API_URL } from '../app/constants';

const createQuote = async ({isbn, quote}) => {
  const { data } = await axios.post(API_URL + `/bookquotes/quote?isbn=` + isbn + "&quote=" + quote);
  return data;
};

const useCreateQuote = () => {
  const queryClient = useQueryClient();
  return useMutation(createQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('book/quotes');
      queryClient.invalidateQueries("random/quote");
    },
  });
};

export default useCreateQuote;