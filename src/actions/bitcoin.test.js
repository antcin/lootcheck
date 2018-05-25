import configureMockStore from 'redux-mock-store'; //function that allows us to configure mock store
import thunk from 'redux-thunk'; //middleware imported to work with async behaviour in redux
import fetchMock from 'fetch-mock'; //used to perform mock fetch requests
import { FETCH_BITCOIN } from './constants'; //constant that represents fetchBitcoin action
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]); //configureMockStore returns a function that creates the store. Allows us to configure and customise what the createStore would do with certain options. We pass thunk middleware to configureMockStore
const store = createMockStore({ bitcoin: {} }); //can initialise store with data by passing it in as an argument

const mockResponse = { body: { bpi: 'bitcoin price index' }};

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse) //fetchMock allows us to stub an endpoint that should be reproduced

it('creates an async action to fetch the bitcoin value', () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }]; // array of expected actions that represent what we think the dispatched actions should contain in the store

  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
