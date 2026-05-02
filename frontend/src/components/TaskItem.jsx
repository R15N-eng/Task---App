import { useState } from 'react'

export function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.title)

  function handleEdit() {
    if (!editValue.trim()) return
    onEdit(task.id, editValue.trim())
    setEditing(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleEdit()
    if (e.key === 'Escape') {
      setEditValue(task.title)
      setEditing(false)
    }
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, task.completed)}
        className="task-checkbox"
      />

      {editing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyDown}
          className="task-edit-input"
          autoFocus
        />
      ) : (
        <span
          className="task-title"
          onDoubleClick={() => setEditing(true)}
        >
          {task.title}
        </span>
      )}

      <div className="task-actions">
        <button
          onClick={() => setEditing(true)}
          className="btn-edit"
          title="Editar"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="btn-delete"
          title="Deletar"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}
