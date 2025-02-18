import { join } from "@std/path";

const cwd = Deno.cwd();

export const config = {
    adapterFileName: "adapter.json",
    dir: {
        themes: join(cwd, "src", "themes"),
    },
};

export type Config = typeof config;
