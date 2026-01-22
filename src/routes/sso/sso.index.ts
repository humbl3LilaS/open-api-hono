import { createRouter } from "@utils/create-app";
import { getUserById } from "./sso.action";
import { docGetUserById } from "./sso.route";

const auth = createRouter();

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

export default auth;
