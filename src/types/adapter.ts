import { ThemeKey } from "./theme.ts";

/**
 * Configuration for a single template
 */
export type TemplateConfig =
    | {
        /**
         * Path to a single template file
         */
        template: string;
        templates?: never;
    }
    | {
        template?: never;
        /**
         * List of template paths for multiple files
         */
        templates: string[];
    };

/**
 * Configuration mapping theme keys to their template configuration.
 * Each adapter can specify templates for any subset of available themes.
 */
export type AdapterConfig = Partial<Record<ThemeKey, TemplateConfig>>;
