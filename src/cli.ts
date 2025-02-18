import { config } from "./config.ts";

if (import.meta.main) {
    const command = Deno.args[0];
    const cwd = Deno.cwd();
    console.log("DEBUG(cli.ts): cwd", cwd);
    const themesPath = config.dir.themes;
    console.log("DEBUG(cli.ts): themesPath", themesPath);

    switch (command) {
        case "generate":
            console.log("TODO: generate");
            break;

        default:
            console.log(`
Usage: black-atom-core <command>

Commands:
  generate    Generate theme files from templates
`);
            Deno.exit(1);
    }
}
