const _  = require("lodash")

const array1 = [{ 'n': 4 }, { 'n': 2 }, { 'n': 6 }]
console.log("Array : " , array1)

let result =  _.sumBy(array1 , 'n')
console.log("Sum of n is : " , result)


