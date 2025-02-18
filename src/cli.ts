import { parse as parseYml } from "@std/yaml";

async function getAdapterConfig() {
    try {
        const adapterConfig = await Deno.readTextFile("adapter.yml");
        const config = parseYml(adapterConfig);
        return config;
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            console.error("Error: adapter.yaml not found in current directory");
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
