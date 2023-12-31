import fp from "fastify-plugin";
import swaggerPlugin from "@fastify/swagger";
import swaggerUIPlugin from "@fastify/swagger-ui";
import { FastifyPluginAsync } from "fastify";
import { jsonSchemaTransform } from "fastify-type-provider-zod";

const plugin: FastifyPluginAsync = async function (fastify) {
  await fastify.register(swaggerPlugin, {
    swagger: {
      host: "localhost:3000",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
      info: {
        title: "Dvdrental API Server",
        description: "Dvdrental API Server with Postgres",
        version: "0.0.1",
      },
    },
    transform: jsonSchemaTransform,
  });

  await fastify.register(swaggerUIPlugin, {
    routePrefix: "/docs",
    uiConfig: {
      deepLinking: false,
      docExpansion: "list",
    },
    staticCSP: true,
    transformSpecificationClone: true,
  });
};

export default fp(plugin, { name: "swagger-plugin" });
