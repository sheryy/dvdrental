import path from "path";
import fp from "fastify-plugin";
import staticPlugin from "@fastify/static";
import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async function (fastify) {
  await fastify.register(staticPlugin, {
    root: path.join(path.resolve("./"), "static"),
    prefixAvoidTrailingSlash: true,
    prefix: "/static",
    wildcard: true,
    index: false,
    list: true,
    allowedPath(pathName, root, request) {
      // TODO: Authorization should be done here
      return true;
    },
  });
};

export default fp(plugin, { name: "static-plugin" });
