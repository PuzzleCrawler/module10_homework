let testMap = new Map();
testMap.set('sky', 'blue'); 
testMap.set('grass', 'green');
testMap.set('apple', 'red');

for (let [key, value] of testMap) {
  console.log(`Key - ${key}, Value - ${value}`);
}