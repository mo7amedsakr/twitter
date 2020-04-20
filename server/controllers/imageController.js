const path = require('path');
const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');
const colorThief = require('colorthief');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

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

const getImgPath = (p) => path.join(path.resolve(), `/data/img/`, p);

exports.uploadTweetImage = upload.single('image');

exports.saveTweetImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `tweet-by-${req.user.username}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .toFormat('jpeg')
    .toFile(`data/img/tweets/${req.file.filename}`);

  req.file.color = await colorThief.getColor(
    getImgPath(`tweets/${req.file.filename}`)
  );

  next();
});

exports.sendImg = (req, res) => {
  const imgPath = getImgPath(req.path);
  fs.access(imgPath, async (error) => {
    if (error) {
      return res.status(404).end();
    }
    let img = sharp(imgPath);
    if (req.query.size === 'small') {
      img = img.resize(500, 500).jpeg({ quality: 90 });
    }

    res.writeHead(200, { 'Content-type': 'image/jpg' });
    res.end(await img.toBuffer());
  });
};
