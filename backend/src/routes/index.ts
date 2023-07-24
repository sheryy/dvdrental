import { FastifyPluginAsyncZod } from "./base";

const route: FastifyPluginAsyncZod = async function (fastify) {
  fastify.get("/", () => "Dvdrental API Server");
};

export default route;
