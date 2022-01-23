function binarySearch(searchList, value) {
  let arrayPath = [];

  function search(a, v) {
    const i = Math.floor((a.length - 1) / 2);
    arrayPath.push(a[i]);
    if (a[i] === v || a.length <= 1) return;

    if (a[i] < v) {
      search(a.slice(i + 1), v);
    } else {
      search(a.slice(0, i), v);
    }
  }

  search(searchList, value);

  return arrayPath[arrayPath.length - 1] === value
    ? arrayPath
    : "Value Not Found";
}

binarySearch(
  [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70,
  ],
  6
);
