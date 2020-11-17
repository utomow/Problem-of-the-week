let array1=[5,4,3,2,1] 
let array2=[6,5,7,8,9]

function sortTwoArrays(arr1, arr2) {
  let temporaryArray1 = [...arr1]
  let temporaryArray2 = [...arr2]

  for (let i = 0; i < temporaryArray1.length - 1; i++) {
    for (let j = i + 1; j < temporaryArray1.length; j++) {
      if (arr1[i] > arr1[j]) {
        let smaller = arr1[j]
        arr1[j] = arr1[i]
        arr1[i] = smaller

        smaller = arr2[j]
        arr2[j] = arr2[i]
        arr2[i] = smaller
      }
    }
  }
  return [arr1, arr2]
}

console.log(array1);
console.log(array2);
console.log(sortTwoArrays(array1, array2))
console.log(array1);
console.log(array2);
