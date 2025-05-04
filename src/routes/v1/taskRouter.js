const { Router } = require("express");
const {TaskController} = require("../../controllers/index.js");
const taskBodyCheckMiddleware = require("./../../middlewares/taskMiddleware.js");
const routeHandler = require("../../middlewares/routeHandler.js");

const TaskRouter = Router();

TaskRouter.get("/",routeHandler, TaskController.getAllTasks);

TaskRouter.get("/", TaskController.getAllByCompleted);

TaskRouter.post("/", taskBodyCheckMiddleware, TaskController.createTask);

TaskRouter.get("/:id", TaskController.getTask);

TaskRouter.delete("/:id", TaskController.deleteTask);

TaskRouter.patch("/:id", TaskController.patchTask);

TaskRouter.put("/:id", taskBodyCheckMiddleware, TaskController.updateTask);

module.exports = TaskRouter;
