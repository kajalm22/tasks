const async = require("async")

const array1 = ['Bob' , 'Mary' , 'Joan' , 'Robert' , 'Julie']

function createUser (username , callback){
    callback(null)

}
async.each(array1 , function(eachUserName , callback){

    console.log("Creating users : " , eachUserName)
    createUser(eachUserName , callback)
},
function(err){
    if(err){
        console.log("Unable to create user")
    }else{
        console.log("All users created successfully!")
    }
}
)