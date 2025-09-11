function diceGameSimulation(numSimulations) {
  const result = [];
  const WIN_SUMS = new Set([7, 11]);
  const LOSE_SUMS = new Set([2, 3, 12]);

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let outcome;

    if (WIN_SUMS.has(sum)) {
      outcome = "win";
    } else if (LOSE_SUMS.has(sum)) {
      outcome = "lose";
    } else {
      outcome = "roll again";
    }

    result.push({
      dice1,
      dice2,
      sum,
      result: outcome,
    });
  }
  return result;
}

// function diceGameSimulation(numSimulations) {
//   const result = [];
//   for (let i = 0; i < numSimulations; i++) {
//     const dice1 = Math.floor(Math.random() * 6) + 1;
//     const dice2 = Math.floor(Math.random() * 6) + 1;
//     const sum = dice1 + dice2;
//     const resultMessage = () => {
//       if ([7, 11].includes(sum)) {
//         return "win";
//       } else if ([2, 3, 12].includes(sum)) {
//         return "lose";
//       } else {
//         return "roll again";
//       }
//     };
//     result.push({
//       dice1,
//       dice2,
//       sum,
//       result: resultMessage(),
//     });
//   }
//   return result;
// }

module.exports = diceGameSimulation;
