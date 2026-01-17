import { createRoute } from "@hono/zod-openapi";
import {
	createSuccessResponse,
	failedResponse,
} from "../../util/open-api-helpers";
import { userSelectSchema } from "../validators/auth.validators";
import { uuidParam } from "../validators/params.validators";

export const docGetUserById = createRoute({
	method: "get",
	path: "/{id}",
	request: { params: uuidParam },
	responses: {
		200: {
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
			description: "Failed Response.",
		},
	},
});
