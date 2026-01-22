import type { AppOpenApi } from "@/types/app.types";
import { swaggerUI } from "@hono/swagger-ui";
import { Scalar } from "@scalar/hono-api-reference";
import packageJSON from "../../package.json";
import { cz } from "./open-api-zod";

export const configureOpenApi = (app: AppOpenApi) => {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Open API Hono Testing",
    },
  });

  app.get("/swagger", swaggerUI({ url: "/doc" }));
  app.get("/scalar", Scalar({ url: "/doc" }));
};

export const createSuccessResponse = <T>(schema: T) => {
  return cz.object({
    success: cz.literal(true),
    data: schema,
  });
};

export const failedResponse = cz.object({
  success: cz.literal(false),
  message: cz.string(),
});
