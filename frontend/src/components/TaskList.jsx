import { TaskItem } from './TaskItem'

export function TaskList({ tasks, onToggle, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhuma tarefa ainda. Adicione uma acima!</p>
      </div>
    )
  }

  const pending = tasks.filter((t) => !t.completed)
  const done = tasks.filter((t) => t.completed)

  return (
    <div className="task-list">
      {pending.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

      {done.length > 0 && (
        <>
          <div className="section-divider">
            Concluídas ({done.length})
          </div>
          {done.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </>
      )}
    </div>
  )
}
