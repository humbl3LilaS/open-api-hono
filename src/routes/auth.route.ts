import { getUserById } from "@actions/auth.actions";
import { docGetUserById } from "@doc/auth.doc";
import { OpenAPIHono } from "@hono/zod-openapi";

export const auth = new OpenAPIHono();

auth.get("/", (ctx) => {
	return ctx.json({ success: true });
});

auth.openapi(docGetUserById, async (ctx) => {
	const { id } = ctx.req.valid("param");
	const res = await getUserById(id);
	if (res.status !== 200) {
		return ctx.json(
			{
				success: false,
				message: res.message,
			},
			res.status,
		);
	}
	return ctx.json({ success: true, data: res.data }, res.status);
});
