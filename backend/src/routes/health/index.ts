import path from "path";
import { z } from "zod";
import { FastifyPluginAsyncZod } from "../base";

const schema = {
  schema: {
    description: "Health check endpoint",
    tags: [path.basename(__dirname)],
    response: {
      200: z.number().positive().describe("Current server time"),
    },
  },
} as const;

const route: FastifyPluginAsyncZod = async function (fastify) {
  fastify.get("/", schema, () => Date.now());
};

export default route;
