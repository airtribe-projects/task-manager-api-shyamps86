
const { StatusCodes } = require("http-status-codes");
const ApiError = require("../utils/ApiError.js");

const taskBodyCheckMiddleware = (req, res, next) => {
    const { completed, description, title } = req.body;
    if (typeof title === "string" &&
        title.trim() !== "" &&
        typeof completed === "boolean" &&
        typeof description === "string" && description.trim()!=="") {
        return next();
    }
    return res.status(StatusCodes.BAD_REQUEST).json({ message: "all fields are mandatory" });
};

module.exports = taskBodyCheckMiddleware;