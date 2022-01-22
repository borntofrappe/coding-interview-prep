/* https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

- compare 
- items which do not exist in the first array
- return the array sorted in alpha
*/
function updateInventory(arr1, arr2) {
  return Object.entries(
    [...arr1, ...arr2].reduce((acc, curr) => {
      const [quantity, item] = curr;
      acc[item] = acc[item] ? acc[item] + quantity : quantity;
      return acc;
    }, {})
  )
    .sort((a, b) => b[0] < a[0])
    .map(([item, quantity]) => [quantity, item]);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
