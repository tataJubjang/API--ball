import fastify, {
  FastifyServerOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import fastifyCors from "fastify-cors";
import priceRouters from "./routers/price";
import track from "./plugins/track";

const buildApp = (options: FastifyServerOptions) => {
  const app = fastify(options);

  app.register(fastifyCors, {
    origin: "*",
  });

  app.register(track, {});

  app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.code(200).send({
      status: "success",
      response:
        "contact https://www.facebook.com/Yollayud.C7 for API usage.",
    });
  });

  app.register(priceRouters, { prefix: "/" });

  app.get("*", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.code(404).send({
      status: "failure",
      response: "route not found.",
    });
  });

  return app;
};

export default buildApp;
