const express = require('express');
const router = express.Router();

const fakeData = [
  {
    id: 1,
    name: "first task"
  }
]

/* GET home route. */
router.get('/', function(req, res) {
  res.json(fakeData);
});

// GET index route
router.get('/:id', (req, res) => {
  let item = fakeData.find(item => item.id === parseInt(req.params.id));
  res.json(item)
})

// POST new route
router.post('/new', (req, res) => {
  console.log(req.body)

  let newItem = {
    id: fakeData.length + 1,
    name: req.body.name 
  }

  fakeData.push(newItem)
  res.json(newItem)
})

// PUT edit route
router.put('/:id', (req, res) => {
  let item = fakeData.find(item => item.id === parseInt(req.params.id));
  if (req.body.name) {item.name = req.body.name}
  res.json(item)
})

// DELETE destroy route 
router.delete('/:id', (req, res) => {
  let item = fakeData.findIndex(item => item.id === parseInt(req.params.id))
  fakeData.splice(item, 1)
  res.json(fakeData)
})


module.exports = router;
