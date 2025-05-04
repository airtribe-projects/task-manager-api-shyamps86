const { StatusCodes } = require("http-status-codes");
const ApiError = require("../utils/ApiError.js");

class CrudRepositary {
    constructor(array) {
        this.array = array;
    }

    create({ title, completed, description }) {
        this.array = [...this.array,{ id: this.array.length + 1, description, completed, title }];
        return "created successfully";
    }

    getTask(id) {
        if (this.array.length < id) {
            throw new ApiError(StatusCodes.NOT_FOUND, "the task is not found");
        }
        return this.array.filter((data) => data.id === id);
    }

    getAll() {
        // console.log(this.array)
        return this.array;
    }

    delete(id) {
        if (this.array.length < id) {
            throw new ApiError(StatusCodes.NOT_FOUND, "task not found");
        }
        this.array = this.array.filter((data) => data.id != id);
        return "deleted successfully";
    }

    update(id, { completed, title, description }) {
        const task = this.array.find((data) => data.id === id);
        if (!task) {
            throw new ApiError(StatusCodes.NOT_FOUND, "task not found");
        }
        task.completed = completed;
        task.description = description;
        task.title = title;
        return "updated successfully";
    }

    patch(id, { completed, description }) {
        if (this.array.length < id) {
            throw new ApiError(StatusCodes.NOT_FOUND, "task not found");
        }
        this.array.forEach((data) => {
            if (data.id === id) {
                data.completed = completed;
                data.description = description;
                // data.title=title
            }
        });
        return "modified successfully";
    }
}

module.exports = CrudRepositary;