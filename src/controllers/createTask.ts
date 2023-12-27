import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createTask(requet: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    createtAt: z.string().transform((str) => new Date(str)),
    updatedAt: z.string().transform((str) => new Date(str)),
  })
  const { title, description, createtAt, updatedAt } = registerBodySchema.parse(
    requet.body,
  )
  try {
    await prisma.task.create({
      data: {
        title,
        description,
        created_at: createtAt,
        updated_at: updatedAt,
      },
    })
  } catch (err) {
    console.error(err)
  }
  return reply.status(201).send()
}
