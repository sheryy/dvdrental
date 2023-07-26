import fp from "fastify-plugin";
import faviconPlugin from "fastify-favicon";
import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async function (fastify) {
  await fastify.register(faviconPlugin);
};

export default fp(plugin, { name: "favicon-plugin" });
