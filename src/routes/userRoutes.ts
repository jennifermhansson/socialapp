import type { FastifyInstance, FastifyPluginOptions } from "fastify";

export async function userRoutes(
  httpServer: FastifyInstance,
  opts: FastifyPluginOptions,
) {
  httpServer.route({
    method: "POST",
    url: "/register",
    handler: controller,
  });
}

export default userRoutes;
