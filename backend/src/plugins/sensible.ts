import fp from "fastify-plugin";
import sensiblePlugin from "@fastify/sensible";
import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async function (fastify) {
  await fastify.register(sensiblePlugin);
};

export default fp(plugin, { name: "sensible-plugin" });
