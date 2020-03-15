const ToDo = require('../models/ToDo.model');
const {
  messages: {
    error: { serverCrashed, createdError, deletedError },
    success: { createdSuccess, deletedSuccess },
  },
} = require('../../constants/');

// TODO: @Angel: validate all handlers with validator package

exports.getToDos = async function(req, res) {
  try {
    const todos = await ToDo.find({});
    res.send(todos);
  } catch {
    res.status(500).send(serverCrashed);
  }
};

exports.addToDos = async function(req, res) {
  const { label, done } = req.body.todo;
  try {
    await ToDo.create({
      label,
      done,
    });
    res.send(createdSuccess);
  } catch {
    res.status(500).send(createdError);
  }
};

exports.updateToDos = async function(req, res) {
  const { _id, label, done } = req.body.todo;
  try {
    const todo = await ToDo.findByIdAndUpdate(
      _id,
      { label, done },
      { new: true }
    );
    res.send(todo);
  } catch {
    res.status(500).send(updatedError);
  }
};

exports.deleteToDos = async function(req, res) {
  const { id } = req.params;
  try {
    await ToDo.findByIdAndRemove({ _id: id });
    res.send(deletedSuccess);
  } catch {
    res.status(500).send(deletedError);
  }
};