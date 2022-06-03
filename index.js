const env = require('./configs/envConfig');
const http = require('http');
const createExpressServer = require('./configs/expressConfig');

const express = createExpressServer();
const server = http.createServer(express);

server.listen(env.PORT, async () => {
    console.log(`🚀 Server is listening on Port: ${env.PORT}`);
    console.log(`🕸️  http://localhost:${env.PORT}`);
});