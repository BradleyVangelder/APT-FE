import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { API_URL } from '../app/constants';

const deleteQuote = async ({quoteId}) => {
  const { data } = await axios.delete(API_URL + `/bookquotes/quote/` + quoteId);
  return data;
};

const useDeleteQuote = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('book/quotes');
      queryClient.invalidateQueries("random/quote");
    },
  });
};

export default useDeleteQuote;