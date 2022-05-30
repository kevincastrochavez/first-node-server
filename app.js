const http = require('http');

const routes = require('./routes');

const server = http.createServer((req, res) => {
  routes;
});

server.listen(3000);
