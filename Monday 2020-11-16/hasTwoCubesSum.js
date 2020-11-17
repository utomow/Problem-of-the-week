let target = 1729

function hasTwoCubesSum(target) {
  if (target > 2147483647) {
    console.log("Target number greater than 2147483647.\n Exiting now.");
  } else {
    let maxIndex = Math.floor(target**(1/3)) + 1
    let outputArray = []

    for (let operand1 = 0; operand1 < maxIndex; operand1++) {
      for (let operand2 = operand1 + 1; operand2 <= maxIndex; operand2++) {
        if (((operand1**3) + (operand2**3)) === target) {
          outputArray.push([operand1, operand2])
        }
      }
    }
    console.log(outputArray);
    return (outputArray.length !== 0)
  }
}

console.log(hasTwoCubesSum(target));
console.log(hasTwoCubesSum(42))