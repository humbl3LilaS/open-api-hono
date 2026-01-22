import env from "@utils/env";
import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";

export const db = drizzle(env.DATABASE_URL!);
