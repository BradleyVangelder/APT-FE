import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { API_URL } from '../app/constants';

const updateQuote = async ({input, quoteId}) => {
  const { data } = await axios.put(API_URL + `/bookquotes/quote?id=` + quoteId + '&quote=' + input);
  return data;
};

const useUpdateQuote = () => {
  const queryClient = useQueryClient();
  return useMutation(updateQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('book/quotes');
      queryClient.invalidateQueries("random/quote");
    },
  });
};

export default useUpdateQuote;