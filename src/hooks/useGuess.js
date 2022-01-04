import { useQuery } from 'react-query';
import axios from 'axios';

const guess = async ( quoteId, bookTitleGuess ) => {
  const { data } = await axios.get("/bookquotes/guess/" + quoteId + "/" + bookTitleGuess);
  return data;
};

const useGuess = (quoteId, bookTitleGuess) => {
    return useQuery(["guess/"], () => guess(quoteId, bookTitleGuess));
  };

export default useGuess;
