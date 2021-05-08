const router = require("express").Router();
const todoController = require("../controllers/todo.controllers");

router.get("/", todoController.getAllTodos);
router.get("/:todoid", todoController.getTodoById);
router.post("/", todoController.createTodo);
router.delete("/:todoid", todoController.deleteTodo);
router.put("/:todoid", todoController.updateTodo);
module.exports = router;
