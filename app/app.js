let num1 = null;
let num2 = null;
let num3 = null;

let word1 = null;
let word2 = null;
let word3 = null;

num1 = prompt("Enter a number");
num2 = prompt("Enter a second number");
num3 = prompt("Enter a third number");

word1 = prompt("Enter a noun");
word2 = prompt("Enter a verb");
word3 = prompt("Enter an adjective");

let average = (Number(num1) + Number(num2) + Number(num3)) / 3;

console.log(`The average of ${num1}, ${num2}, and ${num3} is ${average}.`);

console.log(
  `My favorite class is Information Infrastructure I. I like it more than I like ${word1}s. I even ${word2} every day to show my love for this ${word3} class.`,
);

const currentDateAndTime = new Date();

console.log(currentDateAndTime);
