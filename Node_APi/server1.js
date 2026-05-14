import {createServer} from 'http'

const PORT=8001
const server = createServer((req,res)=>{
    res.write("This is some data \n")
    res.write("This is some more data \n")
    res.end("Hello Sahil from the server1",'utf8',()=>console.log("response end"))
})

server.listen(PORT,console.log(`Server is running on port ${PORT}`))