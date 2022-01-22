# Coding Interview Prep

The freeCodeCamp curriculum proposes [hundreds of exercises](https://www.freecodecamp.org/learn/coding-interview-prep/) to prepare for a coding interview. In this repository I try to complete the exercises and explain my reasoning.

## Algorithms

### [Symmetric Difference](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference)

The _symmetric difference_ is defined in the problem as the operation on two sets which considers the elements which are in either set but not in both.

The assignment asks to implement the feature for a variable number of arrays and to remove duplicates.

For more than two sets the operation should also process the input arrays in sequence. For the symmetric difference of A, B and C for instance, the assignment asks to find the symmetric difference of A and B and then the symmetric difference of the result and C.

To consider all the arguments passed in the `sym` function consider the array-like object which is [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

With the spread operator `...` collect the input input arrays in a larger collection.

```js
const sets = [...arguments];
```

With the `reduce` function consider the arrays in sequence.

```js
const difference = sets.reduce((acc, curr) => {
  //
}, []);
```

The idea is to return an array satisfying the definition of a symmetric difference. One possible solution is to find for each of the two set the elements which do not exist in the opposing data structure.

```js
const a = acc.filter((d) => !curr.includes(d));
const b = curr.filter((d) => !acc.includes(d));
```

The union of these elements provides the symmetric difference, as these are elements which exist in one array, but not the other.

```js
return [...a, ...b];
```

`acc` progressively considers the input arrays behind `curr`, meaning the order of operations is also respected.

What is finally necessary is to remove duplicates from the final array. With another `reduce` function return an array which includes only unique values.

```js
return difference.reduce((acc, curr) => {
  if (acc.includes(curr)) {
    return [...acc];
  } else {
    return [...acc, curr];
  }
}, []);
```
