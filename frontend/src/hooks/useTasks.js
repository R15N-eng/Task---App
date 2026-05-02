import { useState, useEffect } from 'react'
import api from '../services/api'

export function useTasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    try {
      setLoading(true)
      setError(null)
      const data = await api.getTasks()
      setTasks(data)
    } catch (err) {
      setError('Erro ao carregar tarefas. Verifique se o servidor está rodando.')
    } finally {
      setLoading(false)
    }
  }

  async function addTask(title) {
    try {
      const newTask = await api.createTask(title)
      setTasks((prev) => [newTask, ...prev])
    } catch (err) {
      setError('Erro ao criar tarefa.')
    }
  }

  async function toggleTask(id, completed) {
    try {
      const updated = await api.updateTask(id, { completed: !completed })
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)))
    } catch (err) {
      setError('Erro ao atualizar tarefa.')
    }
  }

  async function editTask(id, title) {
    try {
      const updated = await api.updateTask(id, { title })
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)))
    } catch (err) {
      setError('Erro ao editar tarefa.')
    }
  }

  async function removeTask(id) {
    try {
      await api.deleteTask(id)
      setTasks((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      setError('Erro ao deletar tarefa.')
    }
  }

  return { tasks, loading, error, addTask, toggleTask, editTask, removeTask }
}
