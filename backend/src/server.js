const express = require('express')
const cors = require('cors')
require('dotenv').config()

const taskRoutes = require('./routes/taskRoutes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Rotas
app.use('/tasks', taskRoutes)

// Rota de health check
app.get('/', (req, res) => {
  res.json({ message: 'Task App API rodando!' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
