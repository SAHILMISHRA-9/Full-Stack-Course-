// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err =>{
//         console.log(err)
//         // update the DOM to warn the user
//         // acccess an alternative API
//         // throw new Error('This is an error!')

//     })
//     .finally(()=> console.log("The operation completed."))

// try{
//     // the code to execute
// }catch(err){
//     // the code to execite on an error
// }finally{
//     // code to execite at the end of the operation
// }


try{
    const response=await fetch('https://apis.scrimba.com/bored/api/activity')
    if(!response.ok){
        throw new Error("there was a problem with the API")
    }
    const data = await response.json()
    console.log(data)
}catch(err){
    console.log("error occurred")
}finally{
    console.log("the operation is completed")
}