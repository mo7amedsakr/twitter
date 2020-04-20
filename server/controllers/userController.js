const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defiend! Please use /singup instead'
  });
};

exports.getUser = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.params.id);

  if (!doc) {
    return next(new AppError(`No document found with that ID`, 404));
  }

  res.status(200).json({ status: 'success', data: doc });
});
