import { join } from "@std/path";

const cwd = Deno.cwd();

export const config = {
    adapterFileName: "adapter.json",
    dir: {
        themes: join(cwd, "src", "themes"),
    },
    themeKeys: [
        "black-atom-corp-engineering",
        "black-atom-corp-operations",
        "black-atom-corp-medical",
        "black-atom-corp-research",
        "black-atom-crbn-null",
        "black-atom-crbn-supr",
        "black-atom-jpn-koyo-yoru",
        "black-atom-jpn-koyo-hiru",
        "black-atom-jpn-tsuki-yoru",
        "black-atom-terra-spring-day",
        "black-atom-terra-spring-night",
        "black-atom-terra-fall-day",
        "black-atom-terra-fall-night",
        "black-atom-terra-summer-day",
        "black-atom-terra-summer-night",
        "black-atom-terra-winter-day",
        "black-atom-terra-winter-night",
    ],
} as const;

export type Config = typeof config;
