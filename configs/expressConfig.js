const env = require('./envConfig');
const path = require('path');
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const friendRoutes = require('../routes/friends.routes');
const qrCodeRoutes = require('../routes/qrcode.routes');

const createExpressServer = () => {
    const app = express();
    
    // enable cors when in development mode/environment
    if (process.env.NODE_ENV !== 'production') {
        app.use(cors());
    }

    //app.use(cookieParser());
    app.use(express.json());
    // app.use(session({
    //     secret: env.SESSION_SECRET,
    //     resave: false,
    //     saveUninitialized: false
    // }));

    // route configs
    app.use(friendRoutes);
    app.use(qrCodeRoutes);

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
        });
    }

    return app;
};

module.exports = createExpressServer;