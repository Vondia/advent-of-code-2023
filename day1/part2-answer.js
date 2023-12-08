const puzzleInput = require("fs")
  .readFileSync("./puzzle-input.txt")
  .toString()
  .replace()
  .split("\n");

  const santasArray = [];
  const mappingObject = {
    one: "1",
    two: "2",
    tw: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    ight: "8",
    igh: "8",
    nine: "9",
  };

  function replaceWordsWithDigits(input) {
    let localInput = input;
    Object.entries(mappingObject).forEach(([key, value]) => {
      localInput = localInput.replaceAll(key, value);
    });
    return localInput;
  }


  puzzleInput.forEach((document) => {
    let realNumbers = replaceWordsWithDigits(document);
    let numbers = realNumbers.match(/\d/g);
    if (numbers && numbers.length >= 1) {
        let result = `${numbers[0]}${numbers[numbers.length - 1]}`;
        santasArray.push(+result);
      }
  });

  const result = santasArray.reduce(
    (accumulator, currentValue) => {
    return accumulator + currentValue
    }, 0);

  console.log(result);
