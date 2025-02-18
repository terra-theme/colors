import type { Config } from "./types/config.ts";
import { join } from "@std/path";

const cwd = Deno.cwd();

export const config: Config = {
    dir: {
        themes: join(cwd, "src", "themes"),
    },
};
