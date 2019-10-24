const searchItemIndex = (array, item, lowIndex, highIndex) => {
  if (lowIndex > highIndex) return null;

  const midlleIndex = Math.floor((lowIndex + highIndex) / 2);
  const guessItem = array[midlleIndex];

  const newHighIndex = guessItem > item ? midlleIndex - 1 : highIndex;
  const newLowIndex = guessItem < item ? midlleIndex + 1 : lowIndex;

  return (guessItem === item)
    ? midlleIndex : searchItemIndex(array, item, newLowIndex, newHighIndex);
};

const binarySearch = (array, item) => {
  const firstIndex = 0;
  const lastIndex = array.length - 1;

  return searchItemIndex(array, item, firstIndex, lastIndex);
};
export default binarySearch;
