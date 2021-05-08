const Todo = require("../models/todo.models");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.json(todos);
  } catch (err) {
    return res.json(err);
  }
};
const getTodoById = async (req, res) => {
  const id = req.params.todoid;
  try {
    const todo = await Todo.findById(id);
    return res.json(todo);
  } catch (err) {
    return res.json(err);
  }
};
const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
    });

    const savedTodo = await newTodo.save();
    return res.json(savedTodo);
  } catch (err) {
    return res.json(err);
  }
};
const deleteTodo = async (req, res) => {
  const id = req.params.todoid;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    return res.json(deletedTodo);
  } catch (err) {
    return res.json(err);
  }
};
const updateTodo = async (req, res) => {
  const id = req.params.todoid;
  const data = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true });
    return res.json(updatedTodo);
  } catch (err) {
    return res.json(err);
  }
};
module.exports.getAllTodos = getAllTodos;
module.exports.createTodo = createTodo;
module.exports.deleteTodo = deleteTodo;
module.exports.getTodoById = getTodoById;
module.exports.updateTodo = updateTodo;
