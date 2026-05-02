import { useTasks } from './hooks/useTasks'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'

function App() {
  const { tasks, loading, error, addTask, toggleTask, editTask, removeTask } = useTasks()

  const total = tasks.length
  const done = tasks.filter((t) => t.completed).length

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Task App</h1>
          {total > 0 && (
            <span className="progress-badge">
              {done}/{total} concluídas
            </span>
          )}
        </header>

        <TaskForm onAdd={addTask} />

        {error && (
          <div className="error-message">{error}</div>
        )}

        {loading ? (
          <div className="loading">Carregando tarefas...</div>
        ) : (
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onEdit={editTask}
            onDelete={removeTask}
          />
        )}
      </div>
    </div>
  )
}

export default App
