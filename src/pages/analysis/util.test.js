import { plotableData } from './utils';
import { currencies } from '../../testData';

describe('plotableData', () => {
  const dimensions =  [
    'Market Capitalization',
    'Volumn (24h)',
    'Price Change (24h)',
  ];
  it('should return 2 dimensional array with length 3', () => {
    const result = plotableData(currencies, dimensions);
    expect(result.length).toEqual(3);
  });

  it('should return 2 dimensional array with first entry contain dimensions', () => {
    const result = plotableData(currencies, dimensions);
    expect(result[0]).toEqual([
      'Market Capitalization',
      'Volumn (24h)',
      'Price Change (24h)',
    ]);
  });
});