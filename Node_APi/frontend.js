const response = await fectch("https://example.org/post",{
   method : "POST",
   body : JSON.stringify({ username:"tom_1"}),
   headers:{
        "Content-Type":"application/json",
   },
})