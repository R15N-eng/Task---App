const pool = require('../config/database')

const TaskModel = {
  async getAll() {
    const result = await pool.query(
      'SELECT * FROM tasks ORDER BY created_at DESC'
    )
    return result.rows
  },

  async getById(id) {
    const result = await pool.query(
      'SELECT * FROM tasks WHERE id = $1',
      [id]
    )
    return result.rows[0]
  },

  async create(title) {
    const result = await pool.query(
      'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
      [title]
    )
    return result.rows[0]
  },

  async update(id, { title, completed }) {
    const result = await pool.query(
      'UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
      [title, completed, id]
    )
    return result.rows[0]
  },

  async delete(id) {
    const result = await pool.query(
      'DELETE FROM tasks WHERE id = $1 RETURNING *',
      [id]
    )
    return result.rows[0]
  },
}

module.exports = TaskModel
