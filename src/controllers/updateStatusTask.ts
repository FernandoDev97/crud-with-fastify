import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateStatusTask(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsSchema = z.object({ id: z.string() })

  const { id } = paramsSchema.parse(request.params)

  const registerBodySchema = z.object({
    completedAt: z.boolean(),
    updatedAt: z.string().transform((str) => new Date(str)),
  })
  const { completedAt, updatedAt } = registerBodySchema.parse(request.body)

  const task = await prisma.task.findFirst({
    where: {
      id,
    },
  })

  if (!task) {
    return reply.status(404).send({ error: 'Task not found' })
  }

  console.log(new Date())

  try {
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        updated_at: updatedAt,
        completed_at: completedAt,
      },
    })
  } catch (error) {
    console.error(error)
  }

  return reply.status(204).send()
}
