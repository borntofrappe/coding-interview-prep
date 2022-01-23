function insertionSort(array) {
  const sorted = [];
  for (let i = 0; i < array.length; i++) {
    sorted[i] = array[i];
    for (let j = sorted.length - 1; j > 0; j--) {
      if (sorted[j] < sorted[j - 1]) {
        const temp = sorted[j];
        sorted[j] = sorted[j - 1];
        sorted[j - 1] = temp;
      }
    }
  }
  return sorted;
}

insertionSort([3, 5, 1, 8, 3, 4]);
