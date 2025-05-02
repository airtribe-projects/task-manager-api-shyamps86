const { StatusCodes } = require("http-status-codes");
const services = require("../services/index.js");

const createTask = (req, res) => {
    const data = req.body;
    const response = services.TaskService.createTask(data);
    return res.status(StatusCodes.CREATED).json({message:response});
};

const deleteTask = (req, res) => {
    try {
        const { id } = req.params;
        const response = services.TaskService.deleteTask(parseInt(id));
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

const updateTask = (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = services.TaskService.updateTask(parseInt(id), data);
        return res.status(StatusCodes.OK).json({message:response});
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

const patchTask = (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = services.TaskService.patchTask(parseInt(id), data);
        return res.json(response);
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

const getAllTasks = (req, res) => {
    const response = services.TaskService.getAllTasks();
    return res.json({ data: response });
};

const getTask = (req, res) => {
    try {
        const { id } = req.params;
        const response = services.TaskService.getTask(parseInt(id));
        return res.json({ data: response });
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

const getAllByCompleted = (req, res) => {
    const completed = req.query.completed === 'true';
    const response = services.TaskService.getAllByCompleted(completed);
    return res.status(StatusCodes.OK).json({ data: response });
};

module.exports= {
    patchTask,
    deleteTask,
    createTask,
    updateTask,
    getAllTasks,
    getTask,
    getAllByCompleted
};

