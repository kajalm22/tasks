const numbers = [ 6, 25, 32, 66, ]
numbers.forEach(myFunction)         

function myFunction(res , i , arr) {
  arr[i] = res * 10
}
console.log(numbers)