const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  completeTodo,
} = require("../controller/todoController");

const router = express.Router();

router.route("/todos").get(getTodos);
router.route("/todo/create").post(createTodo);
router.route("/todo/delete/:id").delete(deleteTodo);
router.route("/todo/complete/:id").put(completeTodo);

module.exports = router;
