const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const comment = req.body.comment;
  const userId = req.body.userId;
  const dishId = req.body.dishId;
  const addedOn = req.body.addedOn;


  const newComment = new Comment({userId,dishId,comment,addedOn});

  newComment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;