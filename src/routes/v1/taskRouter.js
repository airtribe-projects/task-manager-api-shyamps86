const { Router } = require("express");
const controllers = require("../../controllers/index.js");
const taskBodyCheckMiddleware = require("./../../middlewares/taskMiddleware.js");

const TaskRouter = Router();

TaskRouter.get("/", controllers.TaskController.getAllTasks);

TaskRouter.get("/completed", controllers.TaskController.getAllByCompleted);

TaskRouter.post("/", taskBodyCheckMiddleware, controllers.TaskController.createTask);

TaskRouter.get("/:id", controllers.TaskController.getTask);

TaskRouter.delete("/:id", controllers.TaskController.deleteTask);

TaskRouter.patch("/:id", controllers.TaskController.patchTask);

TaskRouter.put("/:id", taskBodyCheckMiddleware, controllers.TaskController.updateTask);

module.exports = TaskRouter;
