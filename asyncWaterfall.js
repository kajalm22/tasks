const async = require ("async")

const radius = 20

async.waterfall([
    function(callback){
        let pi = Math.PI
        callback(null , pi)        //sending value forward    
        
    },
    function (pi , callback){
        let square = radius * radius
        callback( null , pi , square)     

    },
    function(pi , square , callback){
        area = pi * square
        callback(null , area)           //after calculating area of a square , first arg to the callback has to be null , indicates successful execution

    }
],
function(err , result){
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
}
)





// async.waterfall([
//     function first (done){
//         console.log("Start!")

//         done(null , "Data from first function")
//     },
//     function second (firstFunctionResult , done){
//         console.log(firstFunctionResult)

//         done( null , "Data from second function")
//     },
//     function third (secondFunctionResult , done){
//         console.log(secondFunctionResult)

//         done(null)
//     }
// ],
// function(err){
//     if(err){
//         throw new Error(err)
//     }else{
//         console.log("No error! Function executed successfully","\n","End!")
//     }
// }
// )