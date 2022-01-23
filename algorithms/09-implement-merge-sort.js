function merge(l, r) {
  let a = [];
  while (l[0] && r[0]) {
    if (l[0] < r[0]) {
      a.push(l[0]);
      l = l.slice(1);
    } else {
      a.push(r[0]);
      r = r.slice(1);
    }
  }

  if (l[0]) {
    a.push(...l);
  }
  if (r[0]) {
    a.push(...r);
  }

  return a;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const i = Math.floor(array.length / 2);
  let left = array.slice(0, i);
  let right = array.slice(i);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

mergeSort([2, 5, 1, 2, 10]);
