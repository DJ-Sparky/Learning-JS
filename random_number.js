let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

function rand(min, max) {
  max = max + 1;
  return Math.floor(Math.random() * (max - min));
}
console.log(Math.random());

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

console.log(getRandomInt(1));
// expected output: 0

console.log(Math.random());
// expected output: a number from 0 to <1
