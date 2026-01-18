import { VTUser } from "@valid/auth.validators";
import { eq } from "drizzle-orm";
import { db } from "src/db/drizzle";
import { users } from "src/db/schema";

// TODO: Find a way to absract common response type for all Actions that is compatiable with openapi's create route.
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
		// TODO: How are we going to handle the error higher level or upper level.
		return {
			status: 400,
			message: "Failed to Extract data",
		};
	}
};
