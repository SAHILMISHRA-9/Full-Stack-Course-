import path from 'node:path'
import http from 'node:http'
import fs from 'node:fs'
import { connect } from 'node:http2'

const PORT=8000

const __dirname=import.meta.dirname

const server=http.createServer((req,res)=>{
    const pathToResourse = path.join(__dirname,'public','index.html')

    const Content=fs.readFileSync(pathToResourse,'utf8')

    res.statusCode=200
    res.setHeader('Content-Type','index.html')
    res.end(Content)
})

server.listen(PORT,()=> console.log('Connected on port 8000'))