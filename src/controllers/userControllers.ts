import type { FastifyReply, FastifyRequest } from "fastify";
import type { RegisterRequest } from "../types/http";

export async function register(
    request: FastifyRequest<{ Body: RegisterRequest}>,
    reply: FastifyReply,
) {
    // request.body
}

export async function login(reguest: FastifyRequest, reply: FastifyReply) {
    
}