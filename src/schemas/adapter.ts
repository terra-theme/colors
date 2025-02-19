import * as z from "@zod";
import { themeKeys } from "../types/theme.ts";

const templateConfigSchema = z.object({
    templates: z.array(z.string()),
});

const themeConfigShape = Object.fromEntries(
    themeKeys.map((key) => [key, templateConfigSchema]),
) as { [K in typeof themeKeys[number]]: typeof templateConfigSchema };

export const adapterConfigSchema = z.object({
    $schema: z.string(),
    ...themeConfigShape,
}).partial();

export type TemplateConfig = z.infer<typeof templateConfigSchema>;
export type AdapterConfig = z.infer<typeof adapterConfigSchema>;
