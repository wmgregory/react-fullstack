import * as React from 'react';
import { shallow } from 'enzyme';

import { Hello } from './Hello';

describe('Hello', () => {
  it('should exist', () => {
    const wrapper = shallow(<Hello compiler="test" framework="test" />);

    expect(wrapper).toMatchSnapshot();
  });
});
