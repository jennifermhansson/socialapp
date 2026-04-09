import fastify from "fastify";
import banner from "./banner";
import userRoutes from "./routes/userRoutes";

const httpServer = fastify({});

const port = Number(process.env.PORT) || 3000;
const host = "0.0.0.0";

async function start() {
  await httpServer.register(userRoutes);

  await httpServer.listen({ host, port });

  banner("TEST-SERVICE", "ENV: DEVELOPMENT", `HOST: ${host}:${port}`);
}

start();
