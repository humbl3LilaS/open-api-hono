import type { VTUser } from "@valid/auth.validators";
import type { TActionResponse } from "@/types/util.types";
import { db } from "@db/drizzle";
import { users } from "@db/schema";
import { eq } from "drizzle-orm";
import { HTTPStatus } from "@/types/util.types";

// TODO: Find a way to absract common response type for all Actions that is compatiable with openapi's create route.
export const getUserById = async (userid: string): Promise<TActionResponse<VTUser, 200 | 404 | 400>> => {
  try {
    const [data] = await db.select().from(users).where(eq(users.id, userid));
    if (!data) {
      return {
        status: HTTPStatus.NotFound,
        message: "User Not Found.",
      };
    }
    return {
      status: HTTPStatus.OK,
      data,
    };
  }
  catch (_error) {
    // TODO: How are we going to handle the error higher level or upper level.
    return {
      status: HTTPStatus.BadRequest,
      message: "Failed to Extract data",
    };
  }
};
