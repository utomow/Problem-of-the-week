let target = 10000

function sumOfTwoSquares (target) {
  if (target > 2147483647) {
    console.log("Target number greater than 2147483647.\n Exiting now.");
  } else {
    let maxIndex = Math.floor(Math.sqrt(target)) + 1
    let outputArray = []

    for (let operand1 = 0; operand1 < maxIndex; operand1++) {
      for (let operand2 = operand1 + 1; operand2 <= maxIndex; operand2++) {
        if (((operand1**2) + (operand2**2)) === target) {
          outputArray.push([operand1, operand2])
        }
      }
    }
    return outputArray
  }
}

console.log(sumOfTwoSquares(target));