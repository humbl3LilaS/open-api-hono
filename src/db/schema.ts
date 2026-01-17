import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: uuid().notNull().defaultRandom().primaryKey(),
	username: varchar({ length: 20 }).notNull(),
	firstName: varchar({ length: 35 }).notNull(),
	lastName: varchar({ length: 35 }).notNull(),
	email: text().notNull().unique(),
	password: varchar({ length: 25 }).notNull(),
});
