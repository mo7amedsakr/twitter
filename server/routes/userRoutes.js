const express = require('express');
const tweetRouter = require('./tweetRoutes');
const { getUser, getMe, updateMe } = require('../controllers/userController');
const {
  protect,
  signup,
  login,
  logout
} = require('../controllers/authController');

const {
  uploadUserImages,
  saveUserImages
} = require('../controllers/imageController');

const router = express.Router();

router.use('/:username/tweets', tweetRouter);

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.get('/me', protect, getMe);
router.post('/updateMe', protect, uploadUserImages, saveUserImages, updateMe);

router.get('/:username', getUser);

module.exports = router;
