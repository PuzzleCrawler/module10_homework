let arr = [1, 2, "text", 4, 5, 0, NaN, -8, 0, {}]; // The following array has 2 zero, 3 even numbers, 2 uneven numbers and 3 elements that are ignored in the count

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] % 2 === 0 && arr[i] !== 0) {
      evenCount++;
    } else if (arr[i] !== 0) {
      oddCount++;
    } else {
      zeroCount++;
    }
  }
}

console.log(`There are ${evenCount} even elements in the array.`);
console.log(`There are ${oddCount} odd elements in the array.`);
console.log(`There are ${zeroCount} zero elements in the array.`);