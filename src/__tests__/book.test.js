import {render,screen} from '@testing-library/react';
import Book from '../components/book';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient();

test('should render book component', () => {
    const Wrapper = ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    render(<BrowserRouter><Wrapper><Book isbn={'test-isbn'} title={'testing book'}/></Wrapper></BrowserRouter>)
    const quoteElement = screen.getByTestId('test-isbn')
    expect(quoteElement).toBeInTheDocument()
    expect(quoteElement).toHaveTextContent('testing book')
})