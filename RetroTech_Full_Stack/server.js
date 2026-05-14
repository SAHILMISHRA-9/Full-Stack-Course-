import http from 'http'
import path from 'path'
import { getContentType } from './utils/getContentType.js'
import fs from 'node:fs/promises'

const PORT = 5000

// __dirname
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

    // HANDLE POST REQUEST
    if (req.url === '/sub' && req.method === 'POST') {

        let body = ''

        for await (const chunk of req) {
            body += chunk
        }

        try {

            const emailObj = JSON.parse(body)

            console.log(emailObj)

            res.statusCode = 201

            res.setHeader('Content-Type', 'application/json')

            res.end(JSON.stringify(emailObj))

        } catch (err) {

            console.log('Invalid JSON, ', err)

            res.statusCode = 400

            res.setHeader('Content-Type', 'application/json')

            res.end(JSON.stringify({
                message: 'Invalid JSON'
            }))
        }

        return
    }

    // PUBLIC DIRECTORY
    const publicDir = path.join(__dirname, 'public')

    // RESOURCE PATH
    const pathToResourse = path.join(
        publicDir,
        req.url === '/' ? 'index.html' : req.url
    )

    try {

        // READ FILE
        const content = await fs.readFile(pathToResourse)

        // FILE EXTENSION
        const ext = path.extname(pathToResourse)

        // CONTENT TYPE
        const contentType = getContentType(ext)

        // RESPONSE
        res.statusCode = 200

        res.setHeader('Content-Type', contentType)

        res.end(content)

    } catch (err) {

        console.log(err)

        res.statusCode = 404

        res.setHeader('Content-Type', 'text/html')

        res.end(`
            <h1>404 Resource Not Found</h1>
        `)
    }

})

server.listen(PORT, () => {
    console.log(`connected on port : ${PORT}`)
})