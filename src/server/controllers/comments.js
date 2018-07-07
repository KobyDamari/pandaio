const Comments = require('../models/Comment');

async function addComment(comment) {
    const newComment = Comments({ ...comment });
    newComment.save(function (err) {
        if (err) throw err;
        return newComment;
    });
}

async function getAll() {
    return await Comments.find();
}


module.exports = {
    getAll,
    addComment
};
