const taskService = require("../services/taskService");

const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        console.log('tasks:', JSON.stringify(tasks));
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        const { name } = req.body;
        const task = await taskService.createTask(name);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const task = await taskService.updateTask(id, name);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.deleteTask(id);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};