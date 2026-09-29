const taskModel = require("../models/taskModel");

const getAllTasks = async () => {
    return await taskModel.getAllTasks();
};

const createTask = async (name) => {
    return await taskModel.createTasks(name);
};

const updateTask = async (id, name) => {
    return await taskModel.updateTask(id, name);
};

const deleteTask = async (id) => {
    return await taskModel.deleteTask(id);
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
};
