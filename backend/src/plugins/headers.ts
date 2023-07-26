import fp from "fastify-plugin";
import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async function (fastify) {
  fastify.addHook("onSend", async (request, reply) => {
    // Remove Date header from response
    // ref: https://nodejs.org/api/http.html#responsesenddate
    reply.raw.sendDate = false;
    // Add X-Response-Time to response
    // onSend only includes request processing time (does not include the time to send response to the client)
    reply.header("X-Response-Time", reply.getResponseTime().toFixed(3));
  });
};

export default fp(plugin, { name: "headers-plugin" });
