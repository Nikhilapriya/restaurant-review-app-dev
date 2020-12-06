const router = require('express').Router();
let Favorite = require('../models/favorite.model');

router.route('/').get((req, res) => {
  Favorite.find()
    .then(favorites => res.json(favorites))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userName = req.body.userName;
  const dishId = req.body.dishId;


  const newFavorite = new Favorite({userName,dishId});

  newFavorite.save()
    .then(() => res.json('Favorite added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;