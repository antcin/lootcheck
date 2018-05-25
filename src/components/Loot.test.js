import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot'; //importing the unconnected version of Loot as it's going to use Redux

Enzyme.configure({ adapter: new Adapter() })

describe('Loot', () => {
  const loot = shallow(<Loot />);

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  })
})
