const express = require('express');
const router = express.Router();

// const fakeData = [
//   {
//     id: fakeData.length,
//     name: "first task"
//   }
// ]

/* GET home route. */
router.get('/', function(req, res) {
  // req.json(fakeData);
});

// GET index route
router.get('/:id', (req, res) => {
  let item = fakeData.find(item => item.id === req.params.id);
  res.json(item)
})

module.exports = router;
