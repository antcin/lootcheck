import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Wallet } from './Wallet';

Enzyme.configure({ adapter: new Adapter() })

describe('Wallet', () => {
  const wallet = shallow(<Wallet />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  })
})
