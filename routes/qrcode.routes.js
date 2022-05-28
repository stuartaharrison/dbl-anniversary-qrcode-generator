const express = require('express');
const router = express.Router();
const {
    generateCodeFromFriendCode,
    generateCodes
} = require('../controllers/qrcode.controller');

router.get('/api/qrcodes', generateCodeFromFriendCode);
router.post('/api/qrcodes', generateCodes)

module.exports = router;