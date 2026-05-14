try{
    const response= await fetch('https://apis.scrimba.com/jsonplaceholder/posts',{
        method:'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId:1,
        }),
        headers :{
            'Content-Type' : 'application/json'
        }
    })
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