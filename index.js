const env = require('./configs/envConfig');
const http = require('http');
const createExpressServer = require('./configs/expressConfig');

const express = createExpressServer();
const server = http.createServer(express);

server.listen(env.PORT, async () => {
    console.log(`π Server is listening on Port: ${env.PORT}`);
    console.log(`πΈοΈ  http://localhost:${env.PORT}`);
});