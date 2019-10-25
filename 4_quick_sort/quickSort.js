const quickSort = (array) => {
  if (array.length < 2) return array;
  const [reference, ...rest] = array;

  const less = rest.filter((item) => item < reference);
  const greater = rest.filter((item) => item >= reference);
  return [...quickSort(less), reference, ...quickSort(greater)];
};

export default quickSort;
