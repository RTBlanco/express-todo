const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

/* GET home route. */
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// GET index route
router.get('/:id', async (req, res) => {
  const task = await Task.findByPk(parseInt(req.params.id))
  res.json(task)
})

// POST new route
router.post('/new', async (req, res) => {
  let newTask = await Task.create({ name: req.body.name })
  res.json(newTask)
})

// PUT edit route
router.patch('/:id', async (req, res) => {
  const task = await Task.findByPk(parseInt(req.params.id))
  if (req.body.name) {
    task.name = req.body.name
    await task.save()
  }
  res.json(task)
})

// DELETE destroy route 
router.delete('/:id', async (req, res) => {
  const task = await Task.findByPk(parseInt(req.params.id))
  task.destroy()
  const tasks = await Task.findAll()
  res.json(tasks)
})


module.exports = router;
