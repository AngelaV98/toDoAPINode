const mongoose = require('mongoose');

const {
  db: { url },
} = require('../config/config');

const connect = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

connect()
  .then(async _ => {
    console.log('ok');
  })
  .catch(error => console.log(error));
