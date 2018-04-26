const http = require('http');

const getStaticFile = require('./getStaticFile');

let server = http.createServer((req,res) => {
    getStaticFile(req.url)
    .then(({fileData, contentType}) => {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(fileData, 'utf-8');
    }).catch(err => {
        res.writeHead(404, { 'Content-Type': "text/plain" });
        res.end(err, 'utf-8')
    });
    
})

server.on('error', (err) => console.log(err))

server.listen(3000, () => console.log("Listening at port 3000"))

