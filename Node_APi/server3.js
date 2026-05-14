import http from 'http'
import { type } from 'os'

const PORT =8003

const animal ={
    type:'elephant',
    nickName: 'Elon Tusk'
}
console.log(JSON.stringify(animal))
const server = http.createServer((req,res)=>{
    if(req.url === '/api' && req.method === 'GET'){
        res.end('This is from the server')
    }
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))