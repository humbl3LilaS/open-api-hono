import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

const EnvSchema = z.object({
  ENV: z.string().default("PROD"),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).default("info"),
  DATABASE_URL: z.string(),
});

// eslint-disable-next-line node/prefer-global/process
const env = EnvSchema.parse(process.env);

export default env;
