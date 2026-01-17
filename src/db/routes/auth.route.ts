import { OpenAPIHono } from "@hono/zod-openapi";
import { getUserById } from "../actions/auth.actions";
import { docGetUserById } from "../doc/auth.doc";

export const auth = new OpenAPIHono();

auth.get("/", (ctx) => {
	return ctx.json({ success: true });
});

auth.openapi(docGetUserById, async (ctx) => {
	const { id } = ctx.req.valid("param");
	const data = await getUserById(id);
	return ctx.json(data);
});
