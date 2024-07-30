// src/binary_search.ts
function generateRandomNumber(n, min, max) {
  const randomList2 = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    randomList2.push(randomNumber);
  }
  return randomList2;
}
var randomList = generateRandomNumber(20, 1, 100);
var randomListOrder = randomList.sort((a, b) => a - b);
console.log("lista ordenada", randomListOrder);
function getNumberList(number, list) {
  let high = list.length - 1;
  let low = 0;
  while (high >= low) {
    let count = 0;
    console.log(count);
    let medium = Math.ceil((low + high) / 2);
    let guess = list[medium];
    if (guess === number) {
      console.log(`Encontrei o numero: ${guess}`);
      return guess;
    } else if (guess > number) {
      high = medium - 1;
    } else {
      low = medium + 1;
    }
    count += 1;
  }
  return null;
}
console.log(getNumberList(20, randomListOrder));
