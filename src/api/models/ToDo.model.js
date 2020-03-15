const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const ToDoModel = mongoose.model('todos', ToDoSchema);
module.exports = ToDoModel;
