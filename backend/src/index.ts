import path from "path";
import fastify from "fastify";
import autoload from "@fastify/autoload";
import {
  ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        colorizeObjects: true,
        singleLine: true,
        ignore: "pid,hostname",
        translateTime: "hh:MM:ss:l TT Z",
      },
    },
  },
  caseSensitive: false,
  ignoreTrailingSlash: true,
  ignoreDuplicateSlashes: true,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

const plugins = path.join(__dirname, "plugins");
const routes = path.join(__dirname, "routes");

const registerPlugins = async () => {
  await app.register(autoload, { dir: plugins });
  await app.after();
};

const registerRoutes = async () => {
  await app.register(autoload, { dir: routes });
  await app.ready();
};

const listen = async () => app.listen({ port: 3000 });

const failure = (error: any) => {
  console.log(error);
  process.exit(1);
};

Promise.resolve()
  .then(registerPlugins)
  .then(registerRoutes)
  .then(listen)
  .catch(failure);
