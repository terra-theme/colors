import { parse as parseYml } from "@std/yaml";
import { adapterConfigSchema } from "./schemas/adapter.ts";
import { ZodError } from "@zod";
import type { AdapterConfig } from "./types/adapter.ts";

async function getAdapterConfig(): Promise<AdapterConfig> {
    try {
        const adapterConfig = await Deno.readTextFile("adapter.yml");
        const parsedConfig = parseYml(adapterConfig);
        const validatedConfig = adapterConfigSchema.parse(parsedConfig);

        return validatedConfig;
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            console.error("Error: `adapter.yml` not found in current directory");
            Deno.exit(1);
        }

        if (error instanceof ZodError) {
            console.log("Invalid adapter configuration");
            console.error(JSON.stringify(error.errors, null, 4));
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
            console.log("DEBUG(cli.ts): adapterConfig", adapterConfig);
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
