import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App', () => {
  const defaultProps = {
    data: [],
    error: null,
    loading: false,
    visible: true
  };

  it('renders', () => {
    const tree = shallow(<App {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
