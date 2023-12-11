const input = require("fs")
  .readFileSync("./puzzle-input.txt")
  .toString()
  .replace()
  .split("\n");

const roundResults = [];
const roundScores = [];
let grandTotal = 0;

input.forEach((game, index) => {
  const gameSplit = game.split(":");
  const rounds = gameSplit[1].trim();
  const roundArray = rounds.split(";");
  roundResults.push(getScore(roundArray, index + 1));
});

function getScore(round, points) {
  const minCubes = {
    red: 0,
    green: 0,
    blue: 0
  }
  round.forEach((item) => {
    const scores = item.split(",");
    scores.forEach(score => {
      score = score.trim();
      const [value, item] = score.split(" ");
      if(+value > minCubes[item]) {
        minCubes[item] = +value;
      }
    })
  })
  grandTotal = grandTotal + getTotal(minCubes);
  return minCubes;
}

function getTotal(item) {
  return item.red * item.blue * item.green;
}

console.log(roundResults);

console.log(grandTotal);
