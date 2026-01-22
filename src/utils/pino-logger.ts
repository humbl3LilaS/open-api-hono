import { pinoLogger } from "hono-pino";
import { pino } from "pino";
import pretty from "pino-pretty";

export const cPinoLogger = () => {
  return pinoLogger({
    pino: pino({
      level: process.env.LOG_LEVEL || "info",
    }, process.env.ENV === "PROD" ? undefined : pretty()),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
};
