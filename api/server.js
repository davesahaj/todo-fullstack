const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDatabase = require("./config/database");
const app = express();
app.use(express.json());
app.use(cors());
connectDatabase();

const todo = require("./routes/todoRoute");
app.use("/", todo);
app.listen(3001);
