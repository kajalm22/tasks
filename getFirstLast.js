const _ = require("lodash")

const array1 = ['a', 'b', 'c' , 'd']
console.log("Array : " , array1)

const first = _.first(array1)
console.log("First element of array is : " , first)

const last = _.last(array1 )
console.log("Last element of array is : " , last)


const indexOf = _.indexOf(array1 , 'c' ,0)
console.log("Index of c is : " , indexOf)


