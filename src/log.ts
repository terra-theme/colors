import * as colors from "@std/fmt/colors";

const log = {
    error: (message: string) => {
        console.error(colors.red(" " + message));
    },
    info: (message: string) => {
        console.info(colors.white(" " + message));
    },
    warn: (message: string) => {
        console.warn(colors.yellow(" " + message));
    },
    success: (message: string) => {
        console.log(colors.green(" " + message));
    },
    menu: () => {
        log.info(`Usage: black-atom-core <command>

Commands:
  ${colors.yellow("generate")}    Generate theme files from templates
`);
    },
};

export default log;
