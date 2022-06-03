const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method)

    const createPath = (page) => path.resolve(__dirname, 'public', `${page}.html`)

    let basePath = ''

    switch(req.url){
        case '/':
        case '/home':
        case '/index.html':
            basePath = createPath('index')
            res.statusCode = 200
            break
        case '/aboutus':
            res.statusCode = 301
            res.setHeader('Location', '/contacts')
            res.end()
            break
        case '/contacts':
            basePath = createPath('contact')
            res.statusCode = 200
            break
        default:
            basePath = createPath('error')
            res.statusCode = 404
            break
    }
    fs.readFile(basePath, (err, data) => {
        if(err){
            throw err;
            res.statusCode = 500
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });

    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>HEllo</h1>")
});

server.listen(PORT, 'localhost', (error) =>{
    if(error){
        throw error;
    }
    else{
        console.log(`listening to port ${PORT}`);
    }
})
