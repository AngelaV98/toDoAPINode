const express = require('express');
const {
  getToDos,
  addToDos,
  updateToDos,
  deleteToDos,
} = require('../handlers/todo.handler');

const router = express.Router();

router.get('/', getToDos);
router.post('/', addToDos);
router.put('/', updateToDos);
router.delete('/:id', deleteToDos);

module.exports = router;
