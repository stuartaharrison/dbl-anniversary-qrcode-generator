const { getExpiryTimestamp } = require('../helpers/dates');
const { generateQrCode } = require('../helpers/qrcode');
const { fifthAnniversaryEncryptionWheel } = require('../helpers/encrypter');

// TODO: might want to make a small adjustment to these and make it more generic/part of the request?
// Though, not sure that matters because we won't be going back to previous anniversaries!
const CURRENT_ANNIVERSARY = 5;
const CURRENT_ENCRYPTION_WHEEL = fifthAnniversaryEncryptionWheel;

const generateCodeFromFriendCode = async (req, res) => {
    const { friendCode } = req.query;
    if (!friendCode) {
        res.status(400).json({
            message: 'Friend code has not been specified.'
        });
        return;
    }

    const expiryTime = getExpiryTimestamp(CURRENT_ANNIVERSARY);
    const qrCodeData = await generateQrCode(friendCode, expiryTime, CURRENT_ENCRYPTION_WHEEL);
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
    const expiryTime = getExpiryTimestamp(CURRENT_ANNIVERSARY);
    for (var i = 0; i < friendCodes.length; i++) {
        let codeImage = await generateQrCode(friendCodes[i], expiryTime, CURRENT_ENCRYPTION_WHEEL);
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