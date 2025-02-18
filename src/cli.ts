import * as z from "@zod";
import { AdapterConfig, adapterConfigSchema } from "./schemas/adapter.ts";
import { config } from "./config.ts";

async function getAdapterConfig(): Promise<AdapterConfig> {
    try {
        const adapterConfig = await Deno.readTextFile(config.adapterFileName);
        const parsedConfig = JSON.parse(adapterConfig);
        const validatedConfig = adapterConfigSchema.parse(parsedConfig);

        return validatedConfig;
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            console.error(
                colors.red(
                    `Error: \`${config.adapterFileName}\` not found in current directory.`,
                ),
            );
            Deno.exit(1);
        }

        if (error instanceof z.ZodError) {
            console.error(
                colors.red("Invalid adapter configuration!"),
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
            console.info(colors.green("  Adapter configuration loaded successfully:"));
            console.log(adapterConfig);
            break;
        }

        default:
            console.log(
                colors.cyan(`
Usage: black-atom-core <command>

Commands:
  ${colors.yellow("generate")}    Generate theme files from templates
`),
            );
            Deno.exit(1);
    }
}
