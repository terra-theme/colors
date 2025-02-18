import * as z from "@zod";
import { THEME_KEYS } from "../types/theme.ts";

const themeKeySchema = z.enum(THEME_KEYS);

// First check the structure without validating the types
const baseTemplateConfig = z.object({
    template: z.any().optional(),
    templates: z.any().optional(),
}).superRefine((data, ctx) => {
    if (data.template && data.templates) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Cannot specify both `template` and `templates`",
            path: [],
        });
        return;
    }
    if (!data.template && !data.templates) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Must specify either `template` or `templates`",
            path: [],
        });
        return;
    }
});

// Then refine it to match our exact types
const templateConfigSchema = baseTemplateConfig.pipe(
    z.union([
        z.object({
            template: z.string(),
            templates: z.never().optional(),
        }),
        z.object({
            template: z.never().optional(),
            templates: z.array(z.string()),
        }),
    ]),
);

// Create a discriminated union for the record keys
const recordKeySchema = z.union([
    z.literal("$schema"),
    themeKeySchema,
]);

// Create the record with the union of possible values
export const adapterConfigSchema = z.record(
    recordKeySchema,
    z.union([
        z.string(), // for $schema
        templateConfigSchema, // for theme configurations
    ]),
);

export type AdapterConfig = z.infer<typeof adapterConfigSchema>;
