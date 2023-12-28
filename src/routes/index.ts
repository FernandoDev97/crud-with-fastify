import { createTask } from '@/controllers/createTask'
import { deleteTask } from '@/controllers/deleteTask'
import { listAllTaks } from '@/controllers/listTasks'
import { updateStatusTask } from '@/controllers/updateStatusTask'
import { updateTask } from '@/controllers/updateTask'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.post('/tasks', createTask)

  app.get('/tasks', listAllTaks)

  app.put('/tasks/:id', updateTask)

  app.delete('/tasks/:id', deleteTask)

  app.patch('/tasks/:id/complete', updateStatusTask)
}
