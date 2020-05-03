const path = require('path');
const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');
const colorThief = require('colorthief');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getImgPath = (p) => path.join(path.resolve(), `/data/img/`, p);

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 404), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserImages = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'cover', maxCount: 1 }
]);

exports.saveUserImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  if (req.files.photo) {
    req.body.photo = { img: `${req.user.username}-photo-${Date.now()}.jpeg` };
    await sharp(req.files.photo[0].buffer)
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`data/img/users/${req.body.photo.img}`);

    req.body.photo.color = (
      await colorThief.getColor(getImgPath(`/users/${req.body.photo.img}`))
    ).join(',');
  }
  if (req.files.cover) {
    req.body.cover = { img: `${req.user.username}-cover-${Date.now()}.jpeg` };
    await sharp(req.files.cover[0].buffer)
      .resize(2000, 1000)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`data/img/users/${req.body.cover.img}`);

    req.body.cover.color = (
      await colorThief.getColor(getImgPath(`/users/${req.body.cover.img}`))
    ).join(',');
  }
  next();
});

exports.uploadTweetImage = upload.single('image');

exports.saveTweetImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `tweet-by-${req.user.username}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .toFormat('jpeg')
    .toFile(`data/img/tweets/${req.file.filename}`);

  req.file.color = (
    await colorThief.getColor(getImgPath(`tweets/${req.file.filename}`))
  ).join(',');

  next();
});

exports.sendImg = (req, res) => {
  const imgPath = getImgPath(req.path);
  fs.access(imgPath, async (error) => {
    if (error) {
      return res.status(404).end();
    }
    const img = sharp(imgPath);
    if (req.query.size === 'small') {
      img.resize(500, 500).jpeg({ quality: 90 });
    }

    res.writeHead(200, { 'Content-type': 'image/jpg' });
    res.end(await img.toBuffer());
  });
};
