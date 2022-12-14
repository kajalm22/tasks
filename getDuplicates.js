// const array1 = ["ruby", "javascript","c", "python"]
// const array2 = ["javascript", "c++","perl","sql", "asp.net" , "c"]

const array1 = [1 ,2 , 3 , 4 , 5]
const array2 = [2 , "hello"]

console.log("Array 1 : " , array1)
console.log("Array 2 : " , array2)

const getDuplicates = array1.filter(element => array2.includes(element))
console.log("Duplicate values after comparing : " ,getDuplicates)


const newArray = [...array1,...array2]                 //spread operator
console.log("Result array after merging two arrays with spread : " , newArray)

