import { Hono } from "hono";

export const auth = new Hono();

auth.get("/", (ctx) => {
	return ctx.json({ success: true });
});
