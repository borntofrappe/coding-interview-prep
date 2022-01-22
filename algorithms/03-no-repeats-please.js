function permAlone(str) {
  const permutations = [];

  function generate(a, k) {
    if (k === 1) {
      permutations.push([...a]);
      return;
    } else {
      generate(a, k - 1);

      for (let i = 0; i < k - 1; i++) {
        if (k % 2 === 0) {
          const temp = a[k - 1];
          a[k - 1] = a[i];
          a[i] = temp;
        } else {
          const temp = a[k - 1];
          a[k - 1] = a[0];
          a[0] = temp;
        }

        generate(a, k - 1);
      }
    }
  }

  generate(str.split(""), str.length);

  return permutations.filter((d) => !/(\w)\1/.test(d.join(""))).length;
}

permAlone("aabb");
