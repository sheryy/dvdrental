import path from "path";
import { z } from "zod";
import { RoutePlugin } from "./route";

const schema = {
  schema: {
    description: "Dvdrental API Server",
    tags: ["default"],
    response: {
      200: z.string().describe("API server"),
    },
  },
} as const;

const route: RoutePlugin = async function (fastify) {
  fastify.get("/", schema, () => "DVD Rental API Server");
};

export default route;
