import http from 'http'
import { stringify } from 'querystring'
import {getDataFromDB} from './db4.js'
import { json } from 'stream/consumers'
import { error } from 'console'
import { sendJSONResponse } from './sendJSONResopnse.js'

const PORT=8008
const server = http.createServer(async(req,res)=>{

    const destination= await getDataFromDB()

    if(req.url === '/api' && req.method === 'GET'){
        sendJSONResponse(res,200,destination)
       
    }
    
    else if(req.url.startsWith('/api/continent') && req.method==='GET'){
        const continent = req.url.split('/').pop()
        // console.log(continent)
        const filteredData= destination.filter((destination)=>{
          return destination.continent.toLowerCase()===continent.toLowerCase()
        })
        sendJSONResponse(res,200,filteredData)
        
    }

    else if(req.url.startsWith('/api/country') && req.method==='GET'){
        const country = req.url.split('/').pop()
        // console.log(continent)
        const filteredData= destination.filter((destination)=>{
          return destination.country.toLowerCase()===country.toLowerCase()
        })
        sendJSONResponse(res,200,filteredData)
        
    }
    
    
    else{
        sendJSONResponse(res,404,({error:"not found",message:"The requested route does not exist"}))
        
        
    }
})

server.listen(PORT,()=> console.log(`Server is connected on Port : ${PORT}`))


