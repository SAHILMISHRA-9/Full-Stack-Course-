import http from 'http'
import { stringify } from 'querystring'
import {getDataFromDB} from './db4.js'

const PORT=8005
const server = http.createServer(async(req,res)=>{

    const destination= await getDataFromDB()

    if(req.url === '/api' && req.method === 'GET'){

        res.statusCode = 200,
        res.setHeader('Content-Type','application.json')
        res.end(JSON.stringify(destination))
    }
})

server.listen(PORT,()=> console.log(`Server is connected on Port : ${PORT}`))