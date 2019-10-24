import binarySearch from '../binary_search';

describe('Binary search', () => {
  const array = [1, 3, 5, 7, 9];
  const emptyArray = [];

  const firstIndex = 0;
  const lastIndex = array.length - 1;
  const firstItem = array[firstIndex];
  const lastItem = array[lastIndex];

  const lessThenItems = firstItem - 1;
  const greaterThenItems = lastItem + 1;

  test('get INDEX of first item', () => {
    expect(binarySearch(array, firstItem)).toBe(firstIndex);
  });
  test('get INDEX of last item', () => {
    expect(binarySearch(array, lastItem)).toBe(lastIndex);
  });
  test('less then first item (is not in array)', () => {
    expect(binarySearch(array, lessThenItems)).toBeNull();
  });
  test('greater then last item (is not in array)', () => {
    expect(binarySearch(array, greaterThenItems)).toBeNull();
  });
  test('array is empty', () => {
    expect(binarySearch(emptyArray, firstItem)).toBeNull();
  });
});
