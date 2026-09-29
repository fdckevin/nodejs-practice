const pool = require("../config/database");

const getAllTasks = async () => {
    const result = await pool.query("SELECT * FROM tasks");
    return result.rows;
};

const createTasks = async (name) => {
    const result = await pool.query("INSERT INTO tasks (name) VALUES ($1) RETURNING *", [name]);
    return result.rows[0];
};

const updateTask = async (id, name) => {
    const result = await pool.query("UPDATE tasks SET name = $1 WHERE id = $2 RETURNING *", [name, id]);
    return result.rows[0];
};

const deleteTask = async (id) => {
    const result = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};


module.exports = {
    getAllTasks,
    createTasks,
    updateTask,
    deleteTask
};