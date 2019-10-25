import selectionSort from '../selectionSort';

describe('Selection sort', () => {

  test('Selection sort [1, 3, 5, 7, 9] is equal', () => {
    expect(selectionSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
  });

  test('Selection sort [1, 5, 5, 5, 9] is equal', () => {
    expect(selectionSort([9, 5, 5, 5, 1])).toEqual([1, 5, 5, 5, 9]);
  });

  test('Selection sort [7, 7, 7, 7, 7] is equal', () => {
    expect(selectionSort([7, 7, 7, 7, 7])).toEqual([7, 7, 7, 7, 7]);
  });
  
  test('Selection sort get empty array if array is empty', () => {
    expect(selectionSort([])).toEqual([]);
  });
});
