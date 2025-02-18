import { ThemeKey } from "./theme.ts";

/**
 * Configuration for a single template
 */
export interface TemplateConfig {
    /**
     * Path to a single template file
     */
    template?: string;
    /**
     * List of template paths for multiple files
     */
    templates?: string[];
}

/**
 * Configuration mapping theme keys to their template configuration
 */
export type AdapterConfig = Record<ThemeKey, TemplateConfig>;
