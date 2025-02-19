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
};

export default log;
