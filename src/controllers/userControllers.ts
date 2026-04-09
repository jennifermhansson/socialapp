import type { FastifyReply, FastifyRequest } from "fastify";
import type { RegisterRequest } from "../types/http";
import repository from "../repository";

export async function register(
  request: FastifyRequest<{ Body: RegisterRequest }>,
  reply: FastifyReply,
) {
    await repository.users.insertOne(request.body)
    reply.status(200).send("New user created")
}

export async function login(reguest: FastifyRequest, reply: FastifyReply) {}
