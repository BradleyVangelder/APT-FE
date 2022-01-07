import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { shallow, configure } from 'enzyme';
import {Main} from '../App'
import Books from '../pages/books';
import { Route } from 'react-router-dom'
import Quotes from '../pages/quotes';
import Random from '../pages/random';
import Guess from '../pages/guess';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const queryClient = new QueryClient();

test('test routes', () => {
    const Wrapper = ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
});

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Main />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.element;
        return pathMap;
      }, {});
  })
  it('/ === <Books />', () => {

    expect(pathMap['/']).toEqual(<Books />);
  })
  it('/quotes/:isbn === <Quotes />', () => {
    expect(pathMap['/quotes/:isbn']).toEqual(<Quotes />);
  })
  it('/random === <Random />', () => {
    expect(pathMap['/random']).toEqual(<Random />);
  })
  it('/geuss === <Guess />', () => {
    expect(pathMap['/guess']).toEqual(<Guess />);
  })
})