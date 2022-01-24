function sym() {
  return [...arguments]
    .reduce((acc, curr) => {
      const a = acc.filter((d) => !curr.includes(d));
      const b = curr.filter((d) => !acc.includes(d));
      return [...a, ...b];
    }, [])
    .reduce(
      (acc, curr) => (acc.includes(curr) ? [...acc] : [...acc, curr]),
      []
    );
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
