import auth from "@routes/sso/sso.index";
import createApp from "@utils/create-app";
import { configureOpenApi } from "@utils/open-api";

const app = createApp();

configureOpenApi(app);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v0/auth", auth);

export default app;
