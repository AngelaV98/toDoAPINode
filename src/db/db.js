const mongoose = require("mongoose");

const {
  db: { url }
} = require("../config/config");

const connect = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

connect()
  .then(async connection => {
    console.log("ok");
  })
  .catch(error => console.log(error));
