// function arrayToNumber(arr) {
//   let number = 0
//   for (let i = 0; i < arr.length; i++) {
//     number = (number * 10) + Math.abs(arr[i])
//   }
//   number *= (arr[0] < 1) ? -1 : 1
//   return number
// }

// function arrayToNumber(arr) {
//   let number = 0
//   arr.forEach(element => {
//     number *= 10
//     number += Math.abs(element)
//   });
//   number *= (arr[0] < 0) ? -1 : 1
//   return number
// }

// function numberToArray(num) {
//   let outputArray = []
//   number = Math.abs(num)

//   while (number > 0) {
//     let remainder = 0;
//     remainder = number % 10
//     outputArray.push(remainder)
//     number = Math.floor(number / 10)
//   }
//   outputArray.reverse()
//   outputArray[0] *= (num < 0) ? -1 : 1
//   return outputArray
// }

function arrayToNumber(arr) {
  return arr.reduce((accumulator, currentValue) => { return ((accumulator * 10) + Math.abs(currentValue)) }, 0) * ((arr[0] < 0) ? -1 : 1)    // blame Messele for mentioning "reduce" in the class before LOL
}

function numberToArray(num) {
  let outputArray = []
  number = Math.abs(num)                                    // convert number to positive, change the first digit before exiting if the number is negative

  while (number > 0) {
    outputArray.push(number % 10)                           // push the remainder
    number = Math.floor(number / 10)                        // get the rounded down value from the division
  }
  outputArray.reverse()                                     // reverse the array order, because the division gives the remainder from the least significant digit
  outputArray[0] *= (num < 0) ? -1 : 1                      // change the first digit in index 0 to negative if number is negative
  return outputArray
}

function addArrays(arr1, arr2) {
  if (arr1.length == 0 && arr2.length == 0) {               // if both arrays are empty
    return []                                               // return an empty array
  } else {
    return numberToArray(arrayToNumber(arr1) + arrayToNumber(arr2))
  }
}

let array1 = [3, 2, 9]
let array2 = [1, 2]

let array3 = [3, 2, 6, 6]
let array4 = [-7, 2, 2, 8]

console.log(addArrays(array1, array2))                      // expected [3, 4, 1]
console.log(addArrays(array3, array4))                      // expected [-3, 9, 6, 2]
console.log(addArrays([4, 7, 3], [1, 2, 3]));               // expected [5, 9, 6]
console.log(addArrays([1], [5, 7, 6]));                     // expected [5, 7, 7]
console.log(addArrays([], []))                              // expected [ ]
