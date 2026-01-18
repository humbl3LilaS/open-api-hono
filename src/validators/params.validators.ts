import { cz } from "@utils/open-api-zod";

export const uuidParam = cz.object({
	id: cz.uuid().openapi({
		param: { name: "id", in: "path" },
		example: "11b0d5bc-0637-4ec4-98f0-9f8654e522ac",
	}),
});
