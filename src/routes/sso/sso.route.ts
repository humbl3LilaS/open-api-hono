import { createRoute } from "@hono/zod-openapi";
import { createSuccessResponse, failedResponse } from "@utils/open-api";
import { userSelectSchema } from "@valid/auth.validators";
import { uuidParam } from "@valid/params.validators";
import { HTTPStatus } from "@/types/util.types";

export const docGetUserById = createRoute({
  tags: ["SSO"],
  method: "get",
  path: "/{id}",
  request: { params: uuidParam },
  responses: {
    [HTTPStatus.OK]: {
      content: {
        "application/json": {
          schema: createSuccessResponse(userSelectSchema),
        },
      },
      description: "Success response.",
    },
    400: {
      content: {
        "application/json": {
          schema: failedResponse,
        },
      },
      description: "Generic Error Response.",
    },
    404: {
      content: {
        "application/json": {
          schema: failedResponse,
        },
      },
      description: "User not found.",
    },
  },
});
