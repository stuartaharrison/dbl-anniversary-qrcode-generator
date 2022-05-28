const express = require('express');
const router = express.Router();
const {
    fetchFriends
} = require('../controllers/friends.controller');

router.get('/api/friends', fetchFriends);

module.exports = router;