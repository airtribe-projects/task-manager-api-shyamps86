const { Router } = require("express");
const TaskRouter = require("./taskRouter.js");

const v1Routes = Router();

v1Routes.use("/tasks", TaskRouter);

module.exports = v1Routes;

