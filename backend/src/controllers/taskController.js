const TaskModel = require('../models/taskModel')

const TaskController = {
  async getAll(req, res) {
    try {
      const tasks = await TaskModel.getAll()
      res.json(tasks)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar tarefas' })
    }
  },

  async getById(req, res) {
    try {
      const task = await TaskModel.getById(req.params.id)
      if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' })
      res.json(task)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar tarefa' })
    }
  },

  async create(req, res) {
    try {
      const { title } = req.body
      if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Título é obrigatório' })
      }
      const task = await TaskModel.create(title.trim())
      res.status(201).json(task)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar tarefa' })
    }
  },

  async update(req, res) {
    try {
      const { title, completed } = req.body
      const existing = await TaskModel.getById(req.params.id)
      if (!existing) return res.status(404).json({ error: 'Tarefa não encontrada' })

      const updated = await TaskModel.update(req.params.id, {
        title: title ?? existing.title,
        completed: completed ?? existing.completed,
      })
      res.json(updated)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar tarefa' })
    }
  },

  async delete(req, res) {
    try {
      const deleted = await TaskModel.delete(req.params.id)
      if (!deleted) return res.status(404).json({ error: 'Tarefa não encontrada' })
      res.json({ message: 'Tarefa deletada com sucesso' })
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar tarefa' })
    }
  },
}

module.exports = TaskController
