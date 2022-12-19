let arr = [3, 3, 3, 3, 3];

let allElementsSame = arr.every(element => element === arr[0]);

console.log(allElementsSame); // Output: true (will return false if at least 1 element is different)