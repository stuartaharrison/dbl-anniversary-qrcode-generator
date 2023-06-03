const moment = require('moment');

const getExpiryTimestamp = (anniversary = 5) => {
    switch (anniversary) {
        case 5:
            return Date.now().toString(16);
        default:
            return moment().valueOf();
    }
};

module.exports = {
    getExpiryTimestamp
};