const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const requestListener = (req, res) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('app ne bhand mara hai');
}

const server = http.createServer(requestListener);

const serverStartCallback = () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }

server.listen(port, hostname, serverStartCallback);