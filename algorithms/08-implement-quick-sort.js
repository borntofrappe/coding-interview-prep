function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];

  const smallerEqual = array.filter((d) => d < pivot);
  const larger = array.filter((d) => d > pivot);

  return [
    ...quickSort(smallerEqual),
    ...array.filter((d) => d === pivot),
    ...quickSort(larger),
  ];
}

quickSort([2, 5, 1, 2, 10]);
