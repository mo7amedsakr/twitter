const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },

  username: {
    type: String,
    unique: true,
    required: [true, 'A user must have a username']
  },

  email: {
    type: String,
    required: [true, 'A user must have an e-mail'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },

  cover: {
    img: String,
    color: String
  },

  photo: {
    img: {
      type: String,
      default: 'default.jpg'
    },
    color: String
  },

  bio: String,

  tweets: { type: Number, default: 0 },

  password: {
    type: String,
    required: [true, 'A user must have a password'],
    minlength: 8,
    select: false
  },

  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same'
    }
  }
});

userSchema.index({ username: 1 });

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
  }
  if (this.isModified('username')) {
    this.username = this.username.replace(/\s+/g, '');
  }
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
