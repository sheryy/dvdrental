import path from "path";
import { z } from "zod";
import { RoutePlugin } from "routes/route";

const route: RoutePlugin = async function (fastify) {
  fastify.get(
    "/",
    {
      schema: {
        description: "Health check endpoint",
        tags: [path.basename(__dirname)],
        response: {
          200: z.number().positive().describe("API server current time"),
        },
      },
    },
    async function (request, reply) {
      return Date.now();
    }
  );
};

export default route;
