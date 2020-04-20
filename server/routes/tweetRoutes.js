const express = require('express');
const { protect } = require('../controllers/authController');
const { getAllTweets, createTweet } = require('../controllers/tweetController');
const {
  uploadTweetImage,
  saveTweetImage
} = require('../controllers/imageController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllTweets)
  .post(protect, uploadTweetImage, saveTweetImage, createTweet);

router
  .route('/:id')
  .delete()
  .patch();

module.exports = router;
