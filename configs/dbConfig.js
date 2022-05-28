const env = require('./envConfig');
const { Sequelize } = require('sequelize');

// get the connection details from the env config
const dbHost = env.MYSQL_DATABASE_HOST;
const dbPort = env.MYSQL_DATABASE_PORT;
const dbName = env.MYSQL_DATABASE_NAME;
const dbUser = env.MYSQL_DATABASE_USER;
const dbPass = env.MYSQL_DATABASE_PASS;

// setup sequelize to use mysql
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: dbPort,
    dialect: 'mysql'
});

module.exports = {
    sequelize,
    dbHost,
    dbPort,
    dbName,
    dbUser,
    dbPass
};