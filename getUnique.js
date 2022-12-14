const array1 = ["a" , "b" , "c" ,"d" , "b" , "a"]
console.log("Array : " , array1)

const getUnique = 
Array.from(new Set (array1))            //Sets are always unique, and to convert Set to an array , use Array.from()
// array1.filter((x, i, a) => a.indexOf(x) === i)

console.log("Unique values are : " ,getUnique)