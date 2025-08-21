import express from 'express'
import { createServer } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
//importamos las rutas de persona
import personaRoutes from './routes/persona.routes.js'

const STATUS_CODES = {
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  CREATED: 201,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
  OK: 200,
  UNAUTHORIZED: 401
}

// const a = "123"
const DEFAULT_PORT = 3000

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

const app = express()
const server = createServer(app)
const PORT = process.env.PORT || DEFAULT_PORT

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(__dirname, 'public')))

// Rutas
app.get('/', (req, res) => {
  res.json({
    message: 'Servidor Express con Oxlint configurado!',
    timestamp: new Date().toISOString()
  })
})

app.get('/health', (req, res) => {
  res.status(STATUS_CODES.OK).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

app.use('/api/personas', personaRoutes)

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(STATUS_CODES.NOT_FOUND).json({
    error: 'Ruta no encontrada',
    path: req.originalUrl
  })
})

// Iniciar servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`)
})

export default app
