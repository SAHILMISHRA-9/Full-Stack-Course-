import http from 'http'
import { compose } from 'stream'

const PORT=8002
const  server  = http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url=='/api'){
        res.end("This is from the server")
    }
   
})

server.listen(PORT, ()=> console.log(`server is created on ${PORT}`))

