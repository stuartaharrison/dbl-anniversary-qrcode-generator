const moment = require('moment');

const getExpiryTimestamp = () => {
    return moment().valueOf();
};

module.exports = {
    getExpiryTimestamp
};