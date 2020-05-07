const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html',(error,data)=>{
        if(error) {
            res.writeHead(404)
            res.write('Error:File Not Found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(2100, function (error) {
    if (error) { console.log(`some sort of error - ${error}`) }
    else { console.log('server is listening') }
})