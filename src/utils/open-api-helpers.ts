import { cz } from "./open-api-zod";

export function createSuccessResponse<T>(schema: T) {
  return cz.object({
    success: cz.literal(true),
    data: schema,
  });
}

export const failedResponse = cz.object({
  success: cz.literal(false),
  message: cz.string(),
});
