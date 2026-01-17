import { Hono } from "hono";
import { auth } from "./db/routes/auth.route";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.route("/api/v0/auth", auth);

export default app;
