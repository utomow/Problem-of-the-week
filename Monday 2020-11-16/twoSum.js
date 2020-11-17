let array = [1,2,3,5,4,3]
let target = 6

function twoSum(arr, target) {
  let outputArray = []

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if  ((arr[i] + arr[j]) == target) {
        outputArray.push([i,j])
      }
    }
  }
  return outputArray
}

console.log(twoSum(array, target));