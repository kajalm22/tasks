const ages = [5, 10, 18, 21, 34]

  function checkAge(age) {
  return age > 17
}

//find
const res = ages.find(checkAge)
console.log(" Age eligible for voting is : " , res , "and above")

//map
const asyncFunc = async () => {
const result = ages.map(x => x * 5)
const newResult = await Promise.all(result)
console.log("Result after multiplying : " , newResult)
}

asyncFunc()

