# Coding Interview Prep

The freeCodeCamp curriculum proposes [hundreds of exercises](https://www.freecodecamp.org/learn/coding-interview-prep/) to prepare for a coding interview. In this repository I try to complete the exercises and explain my reasoning.

## Algorithms

### [Symmetric Difference](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference)

The _symmetric difference_ is defined as the operation on two sets which considers the elements which are in either set but not in both.

The assignment asks to implement the feature for a variable number of arrays and to remove duplicates.

For more than two sets the operation should also process the input arrays in sequence. For the symmetric difference of A, B and C for instance, the assignment asks to find the symmetric difference of A and B and then the symmetric difference of the result and C.

#### arguments

To consider the variable number of input arrays the function collects the of arguments in [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

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

The idea is to return an array satisfying the definition of a symmetric difference. One possible solution is to find for each of the two sets the elements which do not exist in the opposing data structure.

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

### [Inventory Update](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update)

The assignment asks to update an array with the keys and values from a second array. If a key does not exist in the original data structure the choice is to include the new key and value pair. If the key does exist the idea is to increment the value only.

Begin by uniting the two arrays in a single data structure and creating an object in which the items are used as keys.

```js
const inventory = [...arr1, arr2].reduce((acc, curr) => {
  //
}, {});
```

In the body of the `reduce` function extract the quantity and item, given in the specific order.

```js
const [quantity, item] = curr;
```

With this information either increment the field or assign the quantity in the object.

```js
acc[item] = acc[item] ? acc[item] + quantity : quantity;
```

Return the object to have the `reduce` function consider the updated object.

```js
return acc;
```

Past the `reduce` function the data structure includes unique items and their rightful quantity. What is left is massaging the data as per the assignment. The structure needs to reflect the format of the input array, nesting one array for each item. Moreover the data needs to be sorted by item and alphabetically.

To build the two dimensional array from the object use `Object.entries`.

```js
Object.entries(inventory);
```

Sort the array by name.

```js
Object.entries(inventory).sort((a, b) => b[0] < a[0]);
```

Loop through the array to return the data in the desired order.

```js
Object.entries(inventory)
  .sort((a, b) => b[0] < a[0])
  .map(([item, quantity]) => [quantity, item]);
```

If you were to rectify the order first you'd access the name in the second item instead of the first.

```diff
-.sort((a, b) => b[0] < a[0])
+.sort((a, b) => b[1] < a[1])
```

### [No Repeats Please](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please)

The challenge asks to consider the number of permutations for the characters in an input string disregarding those permutations in which two letters are repeated one next to the other.

The script works by implementing [Heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm) in order to generate all possible permutations.

From this starting point it is possible to rely on a regular expression to find strings with adjacent characters:

1. capture a character with parentheses

   ```js
   /(\w)/;
   ```

2. consider if the character is repeated immediately afterwards

   ```js
   /(\w)\1/;
   ```

### [Pairwise](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise)

The task of the assignment is sligtly convoluted, but becomes easier to understand by example.

Given an array of integers and a second argument.

```js
pairwise([1, 2, 2, 2, 3, 4, 5, 6], 7);
```

Find the pairs in the array which added together lead to the second argument.

```text
1 + 6 = 7
2 + 5 = 7
3 + 4 = 7
```

You canot repeat the same number in separate pairs — in the example you cannot use 5 for all the 2 included earlier in the array.

When you find the pairs consider sum the _index_ of the elements in the array.

```text
0 + 7 = 7
1 + 6 = 7
4 + 5 = 9
```

Use the lowest possible index — in the example use the first 2 at index 1.

Finally return the sum of these additions.

```text
0 + 7 = 7
1 + 6 = 7
4 + 5 = 9
      ___
       23
```

One possible way to solve the problem is with an object collecting the indexes through key-value pairs.

The idea is to loop through the array and consider the index `i` if not already present in the data structure.

In this instance look for the index of a value in the remainder of the array which satisfies two conditions:

1. the value which leads to the second argument when added to the current element

2. the value whose index is not already included in `indexes`

Note that since you look for a value in the items which are left in the array, `arr.slice(i + 1)`, you need to increment the counter variable `k` to describe the position in the original data structure.

When `findIndex` returns the index, when the value is different from `-1`, update `indexes` to consider the position of the values.

Past the iteration `indexes` is an object which describes the indexes in its keys and values. Return the sum of the values to complete the assignment.

### [Implement Bubble Sort](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort)

The assignment asks to sort elements in an array in ascending order through bubble sort.

The algorithm works as follows:

- loop through the array considering elements in pairs

- if the first element is greater than the second swap the two values in place

At the end of the loop the array is not sorted, but the largest element is positioned at the very end. The idea is to then repeat the process considering one less element. Larger values are progressively pushed to the end finally leading to the sorted data structure.

### [Implement Selection Sort](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort)

The assignment asks to sort elements in an array in ascending order through selection sort.

The algorithm works by continuously looking for the smallest value and positioning the element at the beginning of the array.

Loop through the entire array and place the smallest value at index `0`. Loop through the array skipping the first value and place the smallest value at index `1` and so forth and so on.

### [Implement Insertion Sort](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort)

The assignment asks to sort elements in an array in ascending order through insertion sort.

The idea is to build a sorted array instead of modifying the input data structure:

- add the elements from the input array

- loop through the new data structure backwards, swapping the elements to have smaller values positioned at the very beginning

### [Implement Quick Sort](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort)

The assignment asks to sort elements in an array in ascending order through quick sort.

The algorithm works recursively by creating smaller and smaller arrays, split by an arbitrary value, a pivot:

- in the base case, where the array has one or less items, return the data structure

- consider an arbitrary pivot value, for instance the first element in the array

- split the array into two subarrays with smaller and greater values

- recursively call the function on the smaller and greater arrays

- collect the result in an array with the smaller values, the pivot values, and the greater values. Since the pivot value might repeat itself include every possible copy

### [Implement Merge Sort](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-merge-sort)

The assignment asks to sort elements in an array in ascending order through merge sort.

The challenging problem, sorting an array, is broken down into smaller portions, sorting smaller and smaller arrays until finally the algorithm reaches an array of size 1, sorted by definition. The algorithm then proceeds to merge the sorted units into a larger and larger data structure.

The code includes two functions, `mergeSort` and `merge` to implement the two-step process.

`mergeSort` is responsible for splitting the array into smaller collections with a recursive call:

- in the base case with an array of one or less elements return the array. This is the portion considered sorted

- divide the longer array into two, splitting the data structure in the middle

- recursively call `mergeSort` on the left and right halves

- finally call `merge` to unite the left and right sections

Considering the function stack backwards `merge` receives arrays which grow in size. First of size 1, then 2 and so forth. With this consideration the function creates an array in which to slot the values:

- as long as either array has an item consider the smaller between the two. Add the element to the sorted data structure and remove it from the original array

- add the elements which remain in the collection with larger values

### [Implement Binary Search](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search)

The assignment asks to implement binary search, an efficient algorithm to find an element in a sorted array. The task is to return an array of the values leading to the final value, but the logic of the algorithm remains:

- consider the item in the center of the array

- if the value matches the target terminate the function with the match

- if the value is greater repeat the algorithm for the left half of the array, considering the elements up to the current value

- if the value is smaller repeat the algorithm for the right half of the array, past the current value
