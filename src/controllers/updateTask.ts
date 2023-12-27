import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateTask(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.string() })

  const { id } = paramsSchema.parse(request.params)

  const registerBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z.string().transform((str) => new Date(str)),
  })
  const { title, description, updatedAt } = registerBodySchema.parse(
    request.body,
  )

  const task = await prisma.task.findFirst({
    where: {
      id,
    },
  })

  if (!task) {
    return reply.status(404).send({ error: 'Task not found' })
  }

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      updated_at: updatedAt,
    },
  })
  return reply.status(204).send()
}
