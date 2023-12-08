const puzzleInput = require("fs")
  .readFileSync("./puzzle-input.txt")
  .toString()
  .replace()
  .split("\n");

  const santasArray = [];

  puzzleInput.forEach((document) => {
    let numbers = document.match(/\d/g);
    if (numbers && numbers.length >= 1) {
        let result = `${numbers[0]}${numbers[numbers.length - 1]}`;
        santasArray.push(+result);
      }
  });
console.log(santasArray)
  const result = santasArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  console.log(result);
