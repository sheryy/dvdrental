import fp from "fastify-plugin";
import corsPlugin from "@fastify/cors";
import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async function (fastify) {
  await fastify.register(corsPlugin);
};

export default fp(plugin, { name: "cors-plugin" });
