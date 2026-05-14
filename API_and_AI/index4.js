const promise = new Promise((resolve, reject)=>{
    const success = Math.random() > 0.5
    if( success){
        resolve('Operation successful')
        // we can pass anything array,image etc
    }else{
        reject('Operation failed')
        // we can pass anything array,image etc
    }
})
// promise.then(response => console.log(response))

try{
    const response = await promise 
    console.log(response)
}catch(err){
    console.log(err)
}