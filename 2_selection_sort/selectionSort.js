const selectionSort = (array) => {
  const addSmallest = (arr, acc) => {
    if (arr.length === 0) return acc;

    const smallest = arr.reduce((item, ref) => Math.min(item, ref), arr[0]);
    const index = arr.indexOf(smallest);

    const newArray = [...arr.slice(0, index), ...arr.slice(index + 1)];
    return addSmallest(newArray, acc.concat(smallest));
  };

  return addSmallest(array, []);
};

export default selectionSort;
