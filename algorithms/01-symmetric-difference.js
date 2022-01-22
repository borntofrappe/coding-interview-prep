/* https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

_symmetric difference A △ B_: elements which are in either set, but not in both 

- find the symmetric difference for a variable number of input arrays
- for more than two arrays consider the symmetric difference in sequence, A △ B △ C -> (A △ B) △ C
- remove duplicates from the final array
*/

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
