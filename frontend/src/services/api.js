const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const api = {
  async getTasks() {
    const res = await fetch(`${API_URL}/tasks`)
    if (!res.ok) throw new Error('Erro ao buscar tarefas')
    return res.json()
  },

  async createTask(title) {
    const res = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    if (!res.ok) throw new Error('Erro ao criar tarefa')
    return res.json()
  },

  async updateTask(id, data) {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Erro ao atualizar tarefa')
    return res.json()
  },

  async deleteTask(id) {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    })
    if (!res.ok) throw new Error('Erro ao deletar tarefa')
    return res.json()
  },
}

export default api
