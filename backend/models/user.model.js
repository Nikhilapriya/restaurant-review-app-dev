const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {type: String,required: false},
  name: { type: String, required: false }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;