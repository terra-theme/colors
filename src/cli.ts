import * as z from "@zod";
import { parse as parseYml } from "@std/yaml";
import { AdapterConfig, adapterConfigSchema } from "./schemas/adapter.ts";
import { config } from "./config.ts";

async function getAdapterConfig(): Promise<AdapterConfig> {
    try {
        const adapterConfig = await Deno.readTextFile(config.adapterFileName);
        const parsedConfig = parseYml(adapterConfig);
        const validatedConfig = adapterConfigSchema.parse(parsedConfig);

        return validatedConfig;
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            console.error("Error: `adapter.yml` not found in current directory");
            Deno.exit(1);
        }

        if (error instanceof z.ZodError) {
            console.error(
                "Invalid adapter configuration!",
                error.issues,
            );
            Deno.exit(1);
        }

        throw error;
    }
}

if (import.meta.main) {
    const command = Deno.args[0];

    switch (command) {
        case "generate": {
            const adapterConfig = await getAdapterConfig();
            console.info(adapterConfig);
            break;
        }

        default:
            console.log(`
Usage: black-atom-core <command>

Commands:
  generate    Generate theme files from templates
`);
            Deno.exit(1);
    }
}
