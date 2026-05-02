import { useState } from 'react'

export function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title.trim())
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa..."
        className="task-input"
      />
      <button type="submit" className="btn-add">
        Adicionar
      </button>
    </form>
  )
}
