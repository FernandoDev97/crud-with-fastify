import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteTask(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.string() })

  const { id } = paramsSchema.parse(request.params)

  const task = await prisma.task.findFirst({
    where: {
      id,
    },
  })

  if (!task) {
    return reply.status(404).send({ error: 'Task not found' })
  }

  try {
    await prisma.task.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    console.error(error)
  }

  return reply.status(204).send()
}
