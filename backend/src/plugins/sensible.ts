import fp from "fastify-plugin";
import sensible from "@fastify/sensible";
import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async function (fastify) {
  await fastify.register(sensible);
};

export default fp(plugin, { name: "sensible-plugin" });
