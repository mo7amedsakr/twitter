const Tweet = require('../models/tweetModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllTweets = catchAsync(async (req, res, next) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  const skip = (page - 1) * limit;

  const tweets = await Tweet.find()
    .skip(skip)
    .limit(limit);

  res.status(200).json({
    status: 'success',
    data: tweets
  });
});

exports.createTweet = catchAsync(async (req, res, next) => {
  // await Tweet.create(
  //   {
  //     ...req.body,
  //     user: req.user._id
  //   },
  //   async (err, doc) => {
  //     try {
  //       const tweet = await Tweet.populate(doc, { path: 'user' });
  //       res.status(201).json({
  //         status: 'success',
  //         data: tweet
  //       });
  //     } catch (error) {
  //       return next(new AppError('Faild to post tweet', 400));
  //     }
  //   }
  // );
  if (req.file) {
    req.body.image = req.file.filename;
    req.body.color = req.file.color.join(',');
  } else {
    delete req.body.image;
  }
  const tweet = await Tweet.create({
    ...req.body,
    user: req.user._id
  });

  if (!tweet) {
    return next(new AppError('Faild to post tweet', 400));
  }

  res.status(201).json({
    status: 'success',
    data: {
      ...tweet._doc,
      user: {
        name: req.user.name,
        username: req.user.username,
        photo: req.user.photo
      }
    }
  });
});

exports.deleteTweet = catchAsync(async (req, res, next) => {});
