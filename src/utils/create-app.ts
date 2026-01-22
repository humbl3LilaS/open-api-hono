import type { AppBinding } from "@/types/app.types";
import { OpenAPIHono } from "@hono/zod-openapi";
import { HTTPStatus } from "@/types/util.types";
import { cPinoLogger } from "./pino-logger";

export const createRouter = () => {
  return new OpenAPIHono<AppBinding>();
};

const createApp = () => {
  const app = createRouter();
  app.use(cPinoLogger());

  app.notFound((ctx) => {
    ctx.var.logger.error("THIS SHIT IS CRAZY");
    return ctx.json({ success: false, message: `Endpoint ${ctx.req.path} not supported` }, HTTPStatus.NotFound);
  });

  app.onError((_err, ctx) => {
    return ctx.json({ success: false, message: "Global error handler." });
  });

  return app;
};

export default createApp;
