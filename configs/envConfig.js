if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT || 6000,
    SESSION_SECRET: process.env.SESSION_SECRET || 'dragonball'
};