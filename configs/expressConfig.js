const path = require('path');
const cors = require('cors');
const express = require('express');
const qrCodeRoutes = require('../routes/qrcode.routes');

const createExpressServer = () => {
    const app = express();
    
    // enable cors when in development mode/environment
    if (process.env.NODE_ENV !== 'production') {
        app.use(cors());
    }

    app.use(express.json());

    // route configs
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