const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    comment: String,
    image: String
});

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;
