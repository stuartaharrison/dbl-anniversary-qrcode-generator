const QRCode = require('qrcode');
const { encodeTimestamp, encodeString, encryptionWheel } = require('./encrypter');

const generateQrCode = async (friendCode, timestamp, wheel = encryptionWheel) => {
    let data = generateQrCodeData(friendCode, timestamp, wheel);
    let qrCodeImage = await QRCode.toDataURL(data);

    return {
        friendCode,
        data,
        image: qrCodeImage
    };
};

const generateQrCodeData = (friendCode, timestamp, wheel = encryptionWheel) => {
    let timestampEncoded = typeof(timestamp) === 'string'
        ? encodeString(timestamp, wheel)
        : encodeTimestamp(timestamp, wheel);
        
    return `4,${friendCode}${timestampEncoded}`;
};

module.exports = {
    generateQrCode,
    generateQrCodeData
};