import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Wallet } from './Wallet';

Enzyme.configure({ adapter: new Adapter() })

describe('Wallet', () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual("Wallet balance: 20")
  });

  it('creates an input to deposit into or withdraw from balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  })
});
