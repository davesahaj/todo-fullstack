const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/mern-todo")
    .then((data) => {
      console.log("Connected to db: ", data.connection.host);
    })
    .catch(console.error);
};

module.exports = connectDatabase;
