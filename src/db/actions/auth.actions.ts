import { eq } from "drizzle-orm";
import { db } from "../drizzle";
import { users } from "../schema";
import type { VTUser } from "../validators/auth.validators";

export const getUserById = async (
	userid: string,
): Promise<
	{ status: 200; data: VTUser } | { status: 400; message: string }
> => {
	try {
		const [data] = await db.select().from(users).where(eq(users.id, userid));
		if (!data) {
			return {
				status: 400,
				message: "User Not Found",
			};
		}
		return {
			status: 200,
			data,
		};
	} catch (_error) {
		return {
			status: 400,
			message: "Failed to Extract data",
		};
	}
};
