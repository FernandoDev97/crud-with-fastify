import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listAllTaks(
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  const tasks = await prisma.task.findMany()

  if (tasks.length === 0) {
    return reply.status(200).send({ message: 'No content tasks.' })
  }

  return reply.status(200).send(tasks)
}
