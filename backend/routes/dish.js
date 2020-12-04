const router = require('express').Router();
let Dish = require('../models/dish.model');

router.route('/').get((req, res) => {
  Dish.find()
    .then(dishes => res.json(dishes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const dishId = req.body.dishId;
  const description = req.body.description;


  const newDish = new Dish({name,dishId,description});

  newDish.save()
    .then(() => res.json('Dish added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;