const { StatusCodes } = require("http-status-codes");
const {TaskService} = require("../services/index.js");

const createTask = (req, res) => {
    const data = req.body;
    const response =TaskService.createTask(data);
    return res.status(StatusCodes.CREATED).json({message:response});
};

const deleteTask = (req, res) => {
    try {
        const { id } = req.params;
        const response =TaskService.deleteTask(parseInt(id));
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

const updateTask = (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response =TaskService.updateTask(parseInt(id), data);
        return res.status(StatusCodes.OK).json({message:response});
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

const patchTask = (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response =TaskService.patchTask(parseInt(id), data);
        return res.json(response);
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

const getAllTasks = (req, res) => {
    const response =TaskService.getAllTasks();
    return res.json({ data: response });
};

const getTask = (req, res) => {
    try {
        const { id } = req.params;
        const response =TaskService.getTask(parseInt(id));
        return res.json({ data: response });
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

const getAllByCompleted = (req, res) => {
    const completed = req.query.completed === 'true';
    const response =TaskService.getAllByCompleted(completed);
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

