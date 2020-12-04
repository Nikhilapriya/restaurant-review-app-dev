const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: {type: String, required: true},
  dishId: {type: String, required: true},
  comment: { type: String, required: true },
  addedOn: { type: Date, required: false },
}, {
  timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;