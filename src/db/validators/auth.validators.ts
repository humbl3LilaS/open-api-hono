import { createSelectSchema } from "drizzle-zod";
import type { cz } from "../../util/open-api-zod";
import { users } from "../schema";

export const userSelectSchema = createSelectSchema(users, {
	id: (schema) =>
		schema.openapi({ example: "11b0d5bc-0637-4ec4-98f0-9f8654e522ac" }),
	username: (schema) => schema.openapi({ example: "Pale Edelweiss" }),
	firstName: (schema) => schema.openapi({ example: "Takaki" }),
	lastName: (schema) => schema.openapi({ example: "Kou" }),
	email: (schema) => schema.openapi({ example: "sabishinekobebe@gmail.com" }),
	password: (schema) => schema.openapi({ example: "weareboi1892001" }),
});

export type User = cz.infer<typeof userSelectSchema>;
