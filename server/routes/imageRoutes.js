const express = require('express');
const { sendImg } = require('../controllers/imageController');

const router = express.Router();

router.get('/tweets/:img', sendImg);
router.get('/users/:img', sendImg);

module.exports = router;
