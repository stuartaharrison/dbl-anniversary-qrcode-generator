const QRCode = require('qrcode');
const { encodeTimestamp } = require('./encrypter');

const generateQrCode = async (friendCode, timestamp) => {
    let data = generateQrCodeData(friendCode, timestamp);
    let qrCodeImage = await QRCode.toDataURL(data);

    return {
        friendCode,
        data,
        image: qrCodeImage
    };
};

const generateQrCodeData = (friendCode, timestamp) => {
    let timestampEncoded = encodeTimestamp(timestamp);
    return `4,${friendCode},${timestampEncoded}`;
};

module.exports = {
    generateQrCode,
    generateQrCodeData
};