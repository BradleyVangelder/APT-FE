import {render,screen, fireEvent} from '@testing-library/react';
import Quote from '../components/quote';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

test('should render quote component', () => {
    const Wrapper = ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    render(<Wrapper><Quote isbn={'test-isbn'} q={'testing quote'}/></Wrapper>)
    const quoteElement = screen.getByTestId('test-isbn')
    expect(quoteElement).toBeInTheDocument()
    expect(quoteElement).toHaveTextContent('testing quote')
})


// rendering component to test input
const setup = () => {
  const Wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
  const utils = render(<Wrapper><Quote isbn={'test-isbn'} q={'testing quote'} test={true}/></Wrapper>)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = utils.getByLabelText('quote')
  return {
    input,
    ...utils,
  }
}

test('Changing the input and checking', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: 'Launching your startup and iterating on feedback'}})
  expect(input.value).toBe('Launching your startup and iterating on feedback')
})
test('Keeping default value from prop', () => {
  const {input} = setup()
  expect(input.value).toBe('testing quote')
})
test('leaving the input empty', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: ''}})
  expect(input.value).toBe('')
})