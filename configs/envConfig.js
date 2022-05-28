if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT || 6000,
    SESSION_SECRET: process.env.SESSION_SECRET || 'dragonball',
    MYSQL_DATABASE_HOST: process.env.MYSQL_DATABASE_HOST || 'localhost',
    MYSQL_DATABASE_PORT: process.env.MYSQL_DATABASE_PORT || 3306,
    MYSQL_DATABASE_NAME: process.env.MYSQL_DATABASE_NAME || 'dbl_qrcodes',
    MYSQL_DATABASE_USER: process.env.MYSQL_DATABASE_USER || 'root',
    MYSQL_DATABASE_PASS: process.env.MYSQL_DATABASE_PASS || 'root'
};