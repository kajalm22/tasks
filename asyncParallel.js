const async = require ("async")

// async.parallel({
//     cow: function(callback){
//         setTimeout(function(){
//             callback(null , 'moo')
//         } , 100)

//     },
//     dog: function(callback){
//         setTimeout(function(){
//             callback(null , 'bark')
//         }, 200)
//     }
    
//     }, function(err , results){
//         console.log(results)
// })

async.parallel ([
    async () => await Promise.resolve('hello'),
    async () => await Promise.resolve('world'),
    // async () => await Promise.reject('Error')
])
.then(response => {
    console.log('Response : ' , response)
})
.catch(err => {
    console.log(err)
})



