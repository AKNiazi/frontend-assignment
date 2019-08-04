import { reducer } from '../reducers/reducer';

describe('SET_RECORDS_LIMIT', () => {
  it('should change recordsLimit', () => {
    const action = { type: 'SET_RECORDS_LIMIT', recordsLimit: 5 };
    const resultedState = { recordsLimit: 5 };
    expect(reducer(null, action)).toEqual(resultedState);
  });
});

describe('SET_CURRENCIES_DATA', () => {
  it('should change currencies', () => {
    const action = { type: 'SET_CURRENCIES_DATA', currencies: ['a', 'b'] };
    const resultedState = { currencies: ['a', 'b'] };
    expect(reducer(null, action)).toEqual(resultedState);
  });
});