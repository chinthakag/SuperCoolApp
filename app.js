const http = require('http');
const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World!</h1><br/><br/><p>Happy coding with Node and Azure!!!</p>');
});

server.listen(port,() => {
    console.log(`Server running at port `+port);
});