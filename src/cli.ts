import * as z from "@zod";
import { AdapterConfig, adapterConfigSchema } from "./schemas/adapter.ts";
import { config } from "./config.ts";
import * as colors from "@std/fmt/colors";
import log from "./log.ts";

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

if (import.meta.main) {
    const command = Deno.args[0];

    switch (command) {
        case "generate": {
            const adapterConfig = await getAdapterConfig();
            log.success("Adapter configuration loaded successfully:");
            console.dir(adapterConfig);
            break;
        }

        default:
            log.info(`Usage: black-atom-core <command>

Commands:
  ${colors.yellow("generate")}    Generate theme files from templates
`);
            Deno.exit(1);
    }
}
