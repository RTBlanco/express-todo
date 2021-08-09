const express = require('express');
const { uuid } = require('uuidv4')
const router = express.Router();

// This not the best way to save information
const fakeData  = [
  {id: uuid(), name:"something"}
]


/* GET home route. */
router.get('/', function(req, res) {
  req.send(fakeData);
});

// GET index route
router.get('/:')

module.exports = router;
