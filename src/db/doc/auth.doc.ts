import { createRoute } from "@hono/zod-openapi";
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
					schema: userSelectSchema,
				},
			},
			description: "Success response.",
		},
	},
});
