function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = index + 1; j < array.length; j++) {
      if (array[j] < array[index]) {
        index = j;
      }
    }
    if (index !== i) {
      const temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
  }
  return array;
}

selectionSort([3, 5, 1, 8, 3, 4]);
