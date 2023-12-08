const input = require("fs")
  .readFileSync("./puzzle-input.txt")
  .toString()
  .replace()
  .split("\n");



  const roundResults = [];
  const roundScores = [];

// there can never be more then 39 cubes
// there can never be more then 12 red cubes
// there can never be more then 13 green cubes
// there can never be more then 14 blue cubes

input.forEach((game, index) => {
    const gameSplit = game.split(":");
    if (gameSplit[1]) {
        const rounds = gameSplit[1].trim();
        const roundArray = rounds.split(";");
        roundResults.push(getScore(roundArray, index + 1));
    } else {
        console.log(`Invalid format in line ${index + 1}: ${game}`);
    }
});

  function getScore(round, points) {
    const totals = {};
    const limits = {
      red: 12,
      green: 13,
      blue: 14
    }
    round.forEach((item) => {
      const scores = item.split(",");
      scores.forEach(score => {
        score = score.trim();
        const [value, item] = score.split(" ");
        console.log(value, limits[item])
        if(+value > limits[item]) {
          roundScores.push(points);
          return;
        }
      })
    })
    return totals;
  }

  let grandTotal = 0;
  let uniqueRounds = [...new Set(roundScores)];

  input.forEach((g, i) => {
    const gameNumber = i + 1;
    if(uniqueRounds.includes(gameNumber)) {
      console.log(`${gameNumber} is a valid game`);
    } else {
      console.log(`${gameNumber} is an invalid game`);
      grandTotal = grandTotal + gameNumber;
    }
  });

  console.log("GRANDTOTAL:::::", grandTotal);
