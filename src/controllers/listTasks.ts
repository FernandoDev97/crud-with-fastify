import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listAllTaks(
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  const tasks = await prisma.task.findMany()

  return reply.status(200).send(tasks)
}
