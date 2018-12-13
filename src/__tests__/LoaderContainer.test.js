import React from 'react';
import { shallow } from 'enzyme';

import LoaderContainer from '../components/HOC/LoaderContainer';

describe('LoaderContainer', () => {
  const defaultProps = {
    loading: true,
    error: null,
    children: undefined
  };

  it('renders', () => {
    const tree = shallow(<LoaderContainer {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
