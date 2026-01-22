import type { AppBinding } from "./types/app.type";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { auth } from "@routes/auth.route";
import { Scalar } from "@scalar/hono-api-reference";
import { cPinoLogger } from "@utils/pino-logger";
import { HTTPStatus } from "./types/util.types";

const app = new OpenAPIHono<AppBinding>();

app.use(cPinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.notFound((ctx) => {
  ctx.var.logger.error("THIS SHIT IS CRAZY");
  return ctx.json({ success: false, message: `Endpoint ${ctx.req.path} not supported` }, HTTPStatus.NotFound);
});

app.onError((_err, ctx) => {
  return ctx.json({ success: false, message: "Global error handler." });
});

app.get("/swagger", swaggerUI({ url: "/doc" }));
app.get("/scalar", Scalar({ url: "/doc" }));

app.route("/api/v0/auth", auth);

export default app;
