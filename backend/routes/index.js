const express = require('express');
const router = express.Router();

// This not the best way to save information
const fakeData  = [
  {id: fakeData.length, name:"something"}
]


/* GET home route. */
router.get('/', function(req, res) {
  req.json(fakeData);
});

// GET index route
router.get('/:id', (req, res) => {
  let item = fakeData.find(item => item.id === req.params.id);
  res.json(item)
})

module.exports = router;
