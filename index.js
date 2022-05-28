const env = require('./configs/envConfig');
const http = require('http');
const { sequelize } = require('./configs/dbConfig');
const createExpressServer = require('./configs/expressConfig');

const express = createExpressServer();
const server = http.createServer(express);

server.listen(env.PORT, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log(`💻 Connection established to the database`);
    }
    catch (err) {
        console.error(`☠️ Unable to connect to the database`, err);
    }

    console.log(`🚀 Server is listening on Port: ${env.PORT}`);
    console.log(`🕸️  http://localhost:${env.PORT}`);
});