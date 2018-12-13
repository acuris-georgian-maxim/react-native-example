import React from 'react';
import { shallow } from 'enzyme';

import HomeScreenContainer from '../components/HOC/HomeScreenContainer';

describe('HomeScreenContainer', () => {
  const defaultProps = {
    dataQuery: [],
    appStateQuery: []
  };

  it('renders', () => {
    const tree = shallow(<HomeScreenContainer {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
