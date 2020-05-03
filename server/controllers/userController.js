const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getMe = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.user._id);

  if (!doc) {
    return next(new AppError(`No document found with that ID`, 404));
  }

  res.status(200).json({ status: 'success', data: doc });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defiend! Please use /singup instead'
  });
};

exports.getUser = catchAsync(async (req, res, next) => {
  const doc = await User.findOne({ username: req.params.username });

  if (!doc) {
    return next(new AppError(`No document found with that username`, 404));
  }

  res.status(200).json({ status: 'success', data: doc });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  const updateData = { ...req.body };
  ['email', 'password', 'passwordConfirm'].forEach((i) => {
    if (updateData[i]) {
      delete updateData[i];
    }
  });

  if (updateData.username) {
    updateData.username = updateData.username.toLowerCase().replace(/\s/g, '');
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: updateData },
    { new: true, runValidators: true }
  );

  if (!user) {
    return next(new AppError('Can not update this document '));
  }

  res.status(200).json({ status: 'success', data: user });
});
