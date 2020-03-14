const express = require('express');
const ToDo = require('../db/models/ToDo');

const router = express.Router();

// Get todos
router.get('/', async function(req, res) {
  try {
    const todos = await ToDo.find({});
    res.send(todos);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Add todo
router.post('/', async function(req, res) {
  const { label, done } = req.body.todo;

  try {
    const todo = await ToDo.create({
      label,
      done,
    });
    res.send(todo);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.put('/', async function(req, res) {
  const { _id, label, done } = req.body.todo;
  try {
    console.log(_id, label, done);
    const todo = await ToDo.findByIdAndUpdate(
      _id,
      { label, done },
      { new: true }
    );
    res.send(todo);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.delete('/:id', async function(req, res) {
  const { id } = req.params;
  try {
    const todo = await ToDo.findByIdAndRemove({ _id: id });
    res.send(todo);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
