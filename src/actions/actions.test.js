import configureStore from 'redux-mock-store';

import * as actions from './actions';

import { currencies } from '../testData';

const mockStore = configureStore();
const store = mockStore();


describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('setRecordsLimit', () => {
    it('Dispatches the correct recordsLimit', () => {
      const expectedActions = [
        {
          recordsLimit: '5',
          type: 'SET_RECORDS_LIMIT',
        },
      ];
      store.dispatch(actions.setRecordsLimit('5'));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setCurrenciesData', () => {
    it('Dispatches the correct recordsLimit', () => {
      const expectedActions = [
        {
          currencies,
          type: 'SET_CURRENCIES_DATA',
        },
      ];
      store.dispatch(actions.setCurrenciesData(currencies));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});