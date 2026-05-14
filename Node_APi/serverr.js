import http from 'http'

const PORT =999
const server = http.createServer((req,res)=>{
    const urlObj = new URL(req.url,`http://${req.headers.host}`)

    const quryObj = Object.fromEntries(urlObj.searchParams)
    console.log(quryObj)
})

server.listen(PORT,console.log(`Server is running on port:${PORT} `))