const express = require('express');
const Task = require('../models/Task');
const router = express.Router();


const fakeData = [
  {
    id: 1,
    name: "first task"
  }
]

/* GET home route. */
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// GET index route
router.get('/:id', async (req, res) => {
  // let item = fakeData.find(item => item.id === parseInt(req.params.id));
  const task = await Task.findByPk(parseInt(req.params.id))
  res.json(task)
})

// POST new route
router.post('/new', async (req, res) => {
  // let newItem = {
  //   id: fakeData.length + 1,
  //   name: req.body.name 
  // }
  console.log(req.params)
  let newTask = await Task.create({ name: req.body.name })
  // fakeData.push(newItem)
  res.json(newTask)
})

// PUT edit route
router.patch('/:id', async (req, res) => {
  const task = await Task.findByPk(parseInt(req.params.id))
  // let item = fakeData.find(item => item.id === parseInt(req.params.id));
  console.log(req.body)
  if (req.body.name) {
    task.name = req.body.name
    await task.save()
  }
  res.json(task)
})

// DELETE destroy route 
router.delete('/:id', async (req, res) => {
  // let item = fakeData.findIndex(item => item.id === parseInt(req.params.id))
  const task = await Task.findByPk(parseInt(req.params.id))
  // fakeData.splice(item, 1)
  task.destroy()
  const tasks = await Task.findAll()
  res.json(tasks)
})


module.exports = router;
