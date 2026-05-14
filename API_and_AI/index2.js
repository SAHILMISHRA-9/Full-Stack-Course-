try{
    const response= await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    if(!response.ok){
        throw new Error("problem with api")
    }
    const data=await response.json()
    console.log(data)
}catch(err){
    console.log('error occured')
}finally{
    console.log("executon completed")
}