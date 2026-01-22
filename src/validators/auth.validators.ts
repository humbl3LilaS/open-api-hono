import type { cz } from "@utils/open-api-zod";
import { users } from "@db/schema";
import { createSelectSchema } from "drizzle-zod";

// TODO: Find a way to add abstraction layer around adding example for openapi.
export const userSelectSchema = createSelectSchema(users, {
  id: schema =>
    schema.openapi({ example: "11b0d5bc-0637-4ec4-98f0-9f8654e522ac" }),
  username: schema => schema.openapi({ example: "Pale Edelweiss" }),
  firstName: schema => schema.openapi({ example: "Takaki" }),
  lastName: schema => schema.openapi({ example: "Kou" }),
  email: schema => schema.openapi({ example: "sabishinekobebe@gmail.com" }),
  password: schema => schema.openapi({ example: "weareboi1892001" }),
});

export type VTUser = cz.infer<typeof userSelectSchema>;
