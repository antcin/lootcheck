import React from 'react';
import Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot'; //importing the unconnected version of Loot as it's going to use Redux


Enzyme.configure({ adapter: new Adapter() })

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn()
  const props = { balance: 10, bitcoin: {} }
  let loot = shallow(<Loot {...props} />);


  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      loot = mount(<Loot {...props} />)
    });

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled()
    })
  });
});
