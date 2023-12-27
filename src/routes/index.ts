import { createTask } from '@/controllers/createTask'
import { listAllTaks } from '@/controllers/listTasks'
import { updateTask } from '@/controllers/updateTask'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.post('/tasks', createTask)

  app.get('/tasks', listAllTaks)

  app.put('/tasks/:id', updateTask)
}
