const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const tweetRouter = require('./routes/tweetRoutes');
const imageRouter = require('./routes/imageRoutes');

const app = express();

global.__basedir = __dirname;

app.enable('trust proxy');

// 1) Global Middlewares

// Implement CORS
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: process.env.URL, credentials: true }));
} else {
  app.use(cors({ credentials: true }));
}

app.options('*', cors());

// Serving static files
app.use(express.static(path.join(__dirname, 'build')));
// app.use('/static', express.static(path.join(__dirname, 'data')));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!'
// });
// app.use('/api', limiter);

// Body parser, [req.body]
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against noSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent paramter pollution
app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tweets', tweetRouter);
app.use('/img', imageRouter);

app.all('*', (req, res, next) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.use(globalErrorHandler);

module.exports = app;
