import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").notNull().defaultRandom().primaryKey(),
  username: varchar("username", { length: 20 }).notNull(),
  firstName: varchar("first_name", { length: 35 }).notNull(),
  lastName: varchar("last_name", { length: 35 }).notNull(),
  email: text("email").notNull().unique(),
  password: varchar("password", { length: 25 }).notNull(),
});
