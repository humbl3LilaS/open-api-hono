import { createRoute } from "@hono/zod-openapi";
import { createSuccessResponse, failedResponse } from "@utils/open-api-helpers";
import { userSelectSchema } from "@valid/auth.validators";
import { uuidParam } from "@valid/params.validators";

// TODO: Find a way to abstract createRoute function for DRY approach
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
