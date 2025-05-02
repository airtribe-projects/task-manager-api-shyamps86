const repositaries  = require("../repositaries/index.js");
const ApiError = require("../utils/ApiError.js");

const taskRespositary=new repositaries.TaskRepositary();
const getAllTasks = () => {
    const response = taskRespositary.getAll();
    return response;
};

const createTask = (data) => {
    const response = taskRespositary.create(data);
    return response;
};

const updateTask = (id, data) => {
    try {
        const response = taskRespositary.update(id,data);
        return response;
    }
    catch(error){
        throw new ApiError(error.statusCode,error.message)
    }
}

const deleteTask=(id)=>{
    
    try{
        const response=taskRespositary.delete(id);
        return response;
    }
    catch(error){
        throw new ApiError(error.statusCode,error.message)
    }
}
const getTask=(id)=>{
    try{
        const response=taskRespositary.getTask(id);
        return response;
    }
    catch(error){
        throw new ApiError(error.statusCode,error.message)
    }
}
const patchTask=(id,data)=>{
    try{
        const response=taskRespositary.patch(id,data);
        return response;
    }
    catch(error){
        throw new ApiError(error.statusCode,error.message)
    }
    
}

const getAllByCompleted=(data)=>{
    const response=taskRespositary.getAllByCompleted(data);
    return response;
}

module.exports ={createTask,getAllByCompleted,deleteTask,updateTask,getAllTasks,patchTask,getTask};