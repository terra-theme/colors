import * as z from "@zod";
import { AdapterConfig, adapterConfigSchema, TemplateConfig } from "./schemas/adapter.ts";
import { config } from "./config.ts";
import log from "./lib/log.ts";
import { processTemplate, writeOutput } from "./lib/template.ts";
import { Definition, Key } from "./types/theme.ts";

import black_atom_corp_eng from "./themes/corp/black-atom-corp-eng.ts";
import black_atom_jpn_koyo_yoru from "./themes/jpn/black-atom-jpn-koyo-yoru.ts";
import black_atom_jpn_koyo_hiru from "./themes/jpn/black-atom-jpn-koyo-hiru.ts";
import black_atom_jpn_tsuki_yoru from "./themes/jpn/black-atom-jpn-tsuki-yoru.ts";

const themeMap: Record<Key, Definition | null> = {
    "black-atom-corp-engineering": black_atom_corp_eng,
    "black-atom-corp-operations": null,
    "black-atom-corp-medical": null,
    "black-atom-corp-research": null,
    "black-atom-jpn-koyo-yoru": black_atom_jpn_koyo_yoru,
    "black-atom-jpn-koyo-hiru": black_atom_jpn_koyo_hiru,
    "black-atom-jpn-tsuki-yoru": black_atom_jpn_tsuki_yoru,
    "black-atom-crbn-null": null,
    "black-atom-crbn-supr": null,
    "black-atom-terra-spring-day": null,
    "black-atom-terra-spring-night": null,
    "black-atom-terra-fall-day": null,
    "black-atom-terra-fall-night": null,
    "black-atom-terra-summer-day": null,
    "black-atom-terra-summer-night": null,
    "black-atom-terra-winter-day": null,
    "black-atom-terra-winter-night": null,
};

async function getAdapterConfig(): Promise<AdapterConfig> {
    try {
        const adapterConfig = await Deno.readTextFile(config.adapterFileName);
        return adapterConfigSchema.parse(JSON.parse(adapterConfig));
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            log.error(`No \`${config.adapterFileName}\` found in current directory. Abort.`);
            Deno.exit(1);
        }

        if (error instanceof z.ZodError) {
            log.error("Invalid adapter configuration!");
            console.dir(error.issues);
            Deno.exit(1);
        }

        throw error;
    }
}

async function processThemeTemplates(themeKey: Key, templatePath: TemplateConfig["templates"]) {
    const theme = themeMap[themeKey];

    if (!theme) {
        log.error(`Theme "${themeKey}" not found`);
        return;
    }

    for (const path of templatePath) {
        try {
            log.info(`Processing template: ${path}`);
            const content = await processTemplate(theme, path);
            await writeOutput(content, path);
            log.success(`Generated: ${path.replace(".template.", ".")}`);
        } catch (error) {
            if (error instanceof Error) {
                log.error(`Failed to process template ${path}: ${error.message}`);
            }
        }
    }
}

if (import.meta.main) {
    const command = Deno.args[0];

    switch (command) {
        case "generate": {
            const adapterConfig = await getAdapterConfig();
            log.success("Adapter configuration loaded successfully");

            const { $schema: _, ...configs } = adapterConfig;

            const configEntries = Object.entries(configs) as [Key, TemplateConfig][];

            if (configEntries.length === 0) {
                log.warn("No theme keys defined!");
            }

            for (const [themeKey, config] of configEntries) {
                await processThemeTemplates(themeKey, config.templates);
            }

            break;
        }

        case "-h":
        case "--help":
            log.menu();
            break;

        default:
            log.menu();
            Deno.exit(1);
    }
}
