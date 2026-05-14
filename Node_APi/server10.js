import http from 'http'
import { stringify } from 'querystring'
import {getDataFromDB} from './db4.js'
import { json } from 'stream/consumers'
import { error } from 'console'
import { sendJSONResponse } from './sendJSONResopnse.js'
import { getDataByPathParams } from './getDataByPathParams.js'
import { getDataByQueryParams } from './getDataByQueryParams.js'

const PORT=9001
const server = http.createServer(async(req,res)=>{


    const urlObj = new URL(req.url, `http://${req.headers.host}` )

    const queryObj = Object.fromEntries(urlObj.searchParams)



    const destination= await getDataFromDB()

    if(urlObj.pathname === '/api' && req.method === 'GET'){
        let filterredDestination = getDataByQueryParams(destination,queryObj)
        
        
        sendJSONResponse(res,200,filterredDestination)
       
    }
    
    else if(req.url.startsWith('/api/continent') && req.method==='GET'){
        const continent = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destination,'continent',continent)
        
        sendJSONResponse(res,200,filteredData)
        
    }

    else if(req.url.startsWith('/api/country') && req.method==='GET'){
        
        const country = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destination,'country',country)
        
        sendJSONResponse(res,200,filteredData)
        
    }
    
    
    else{
        sendJSONResponse(res,404,({error:"not found",message:"The requested route does not exist"}))
        
        
    }
})

server.listen(PORT,()=> console.log(`Server is connected on Port : ${PORT}`))


