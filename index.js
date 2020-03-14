const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const winston = require('./src/config/winston');

require('./src/db/db.js');
const { port } = require('./src/config/config');

const app = express();
const todoRouter = require('./src/routers/todo');

app.use(cors());
app.use(morgan('combined', { stream: winston.stream }));

app.use(express.json());
app.use('/api/todos', todoRouter);

app.get('/', function(req, res) {
  res.send('/ GET');
});

const PORT = port || 4000;
app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
