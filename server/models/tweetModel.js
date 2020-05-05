const mongoose = require('mongoose');
const User = require('./userModel');

const tweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  image: String,
  color: String
});

tweetSchema.post('save', async function() {
  await User.findByIdAndUpdate(this.user, { $inc: { tweets: 1 } });
});

tweetSchema.pre(/^find/, function(next) {
  this.sort('-createdAt').populate({
    path: 'user',
    select: 'name username photo'
  });
  next();
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
