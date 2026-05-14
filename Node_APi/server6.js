import http from 'http'
import { stringify } from 'querystring'
import {getDataFromDB} from './db4.js'
import { json } from 'stream/consumers'
import { error } from 'console'

const PORT=8006
const server = http.createServer(async(req,res)=>{

    const destination= await getDataFromDB()

    if(req.url === '/api' && req.method === 'GET'){

        res.statusCode = 200,
        res.setHeader('Content-Type','application.json')
        res.end(JSON.stringify(destination))

    }
    
    else if(req.url.startsWith('/api/continent/africa') && req.method==='GET'){
        const continent = req.url.split('/').pop()
        // console.log(continent)
        const filteredData= destination.filter((destination)=>{
          return destination.continent.toLowerCase()===continent.toLowerCase()
        })
        res.statusCode = 200,
        res.setHeader('Content-Type','application.json')
        res.end(JSON.stringify(filteredData))
    }
    
    
    else{
        res.setHeader('Content-Type','application.json')
        res.statusCode = 404
        res.end(JSON.stringify({error:"not found",message:"The requested route does not exist"}))

        
    }
})

server.listen(PORT,()=> console.log(`Server is connected on Port : ${PORT}`))