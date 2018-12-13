import React from 'react';
import { shallow } from 'enzyme';

import HomeScreen from '../components/Home/HomeScreen';

describe('HomeScreen', () => {
  const defaultProps = {
    data: [],
    error: null,
    loading: false,
    visible: true
  };

  it('renders', () => {
    const tree = shallow(<HomeScreen {...defaultProps} />).dive();
    expect(tree).toMatchSnapshot();
  });
});
