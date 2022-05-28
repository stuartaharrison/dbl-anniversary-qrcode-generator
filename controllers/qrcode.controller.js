const { getExpiryTimestamp } = require('../helpers/dates');
const { generateQrCode } = require('../helpers/qrcode');

const generateCodeFromFriendCode = async (req, res) => {
    const { friendCode } = req.query;
    if (!friendCode) {
        res.status(400).json({
            message: 'Friend code has not been specified.'
        });
        return;
    }

    const expiryTime = getExpiryTimestamp();
    const qrCodeData = await generateQrCode(friendCode, expiryTime);
    res.status(200).json({
        ...qrCodeData
    });
};

const generateCodes = async (req, res) => {
    const { friendCodes } = req.body;
    if (!friendCodes || friendCodes.length < 1) {
        res.status(400).json({
            message: 'No friend codes have been specified.'
        });

        return;
    }

    const images = [];
    const expiryTime = getExpiryTimestamp();
    for (var i = 0; i < friendCodes.length; i++) {
        let codeImage = await generateQrCode(friendCodes[i], expiryTime);
        images.push(codeImage);
    }

    res.status(200).json({
        images
    });
};

module.exports ={
    generateCodeFromFriendCode,
    generateCodes
};