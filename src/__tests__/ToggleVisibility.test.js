import React from 'react';
import { shallow } from 'enzyme';

import { ApolloProvider } from 'react-apollo';
import { client } from '../graphql/apollo';

import ToggleVisibility from '../components/Home/ToggleVisibility';

describe('ToggleVisibility', () => {
  describe('render', () => {
    it('renders the component', () => {
      const tree = shallow(
        <ApolloProvider client={client}>
          <ToggleVisibility />
        </ApolloProvider>
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
