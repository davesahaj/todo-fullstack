const Todo = require("../models/todo");

exports.getTodos = async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).json({ success: true, todos });
};

exports.createTodo = async (req, res, next) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ success: true, todo });
};

exports.deleteTodo = async (req, res, next) => {
  let todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) {
    res.status(500).json({ success: false });
  } else res.status(200).json({ success: true, todo });
};

exports.completeTodo = async (req, res, next) => {
  let todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(500).json({ success: false });
  } else {
    todo.complete = !todo.complete;
    todo.save();

    res.status(200).json({ success: true, todo });
  }
};
