const reverse = (arr) => [...arr].reverse();
const sort = (arr) => [...arr].sort();
const even = (arr) => [...arr].filter((num) => num % 2 === 0);

const numbers = [8,3,2,1,5,4,6];

console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
