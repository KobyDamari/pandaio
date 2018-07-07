const router = require('express').Router();
const { getAll, addComment } = require('../controllers/comments');

router.get('/Comments', function (req, res) {
    getAll()
        .then((data) => res.json(data))
        .catch(() => res.send('error'));
});

router.post('/Comments', function (req, res) {
    const commentData = req.body;
    addComment(commentData).then(() => {
        res.send('success');
    });
});

module.exports = router;
