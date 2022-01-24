function pairwise(arr, arg) {
  const indexes = {};
  for (let i = 0; i < arr.length - 1; i++) {
    if (!indexes[i]) {
      const j = arr
        .slice(i + 1)
        .findIndex((d, k) => d + arr[i] === arg && !indexes[k + i + 1]);

      if (j !== -1) {
        indexes[i] = i;
        indexes[j + i + 1] = j + i + 1;
      }
    }
  }

  return Object.values(indexes).reduce((acc, curr) => acc + curr, 0);
}

pairwise([0, 0, 0, 0, 1, 1], 1);
