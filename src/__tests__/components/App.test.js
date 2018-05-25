import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../components/App';

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

  it('contains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });

  it('contains a link to the coindesk price page', () => {
    expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
  });
});
