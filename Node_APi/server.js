// import http from 'node:http'
import { createServer } from "node:http"

// const server= http.createServer()
const PORT= 8000
const server= createServer((req,res)=>{
    res.end("hello from the server")
})

server.listen(PORT,()=> console.log(`server is running on port : ${PORT}`))