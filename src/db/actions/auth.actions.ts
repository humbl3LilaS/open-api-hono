import { eq } from "drizzle-orm";
import { db } from "../drizzle";
import { users } from "../schema";

export const getUserById = async (userid: string) => {
	const [data] = await db.select().from(users).where(eq(users.id, userid));
	return data;
};
