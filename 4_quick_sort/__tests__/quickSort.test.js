import quickSort from '../quickSort';

describe('Quick sort', () => {
  
  test('Quick sort [0, 2, 4, 6, 8] is equal', () => {
    expect(quickSort([8, 6, 4, 2, 0])).toEqual([0, 2, 4, 6, 8]);
  });

  test('Quick sort [0, 3, 4, 4, 8] is equal', () => {
    expect(quickSort([8, 4, 4, 3, 0])).toEqual([0, 3, 4, 4, 8]);
  });

  test('Quick sort [6, 6, 6, 6, 7] is equal', () => {
    expect(quickSort([7, 6, 6, 6, 6])).toEqual([6, 6, 6, 6, 7]);
  });
  
  test('Quick sort get empty array if array is empty', () => {
    expect(quickSort([])).toEqual([]);
  });
});
