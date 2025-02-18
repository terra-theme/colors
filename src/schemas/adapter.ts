import { z } from "@zod";
import { THEME_KEYS } from "../types/theme.ts";

const themeKeySchema = z.enum(THEME_KEYS);

const templateConfigSchema = z.union([
    z.object({
        template: z.string(),
        templates: z.never().optional(),
    }),
    z.object({
        template: z.never().optional(),
        templates: z.array(z.string()),
    }),
]);

export const adapterConfigSchema = z.record(themeKeySchema, templateConfigSchema);
export type AdapterConfig = z.infer<typeof adapterConfigSchema>;
