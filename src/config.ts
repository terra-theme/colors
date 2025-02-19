import { join } from "@std/path";

import black_atom_corp_eng from "./themes/corp/black-atom-corp-eng.ts";
import black_atom_jpn_koyo_yoru from "./themes/jpn/black-atom-jpn-koyo-yoru.ts";
import black_atom_jpn_koyo_hiru from "./themes/jpn/black-atom-jpn-koyo-hiru.ts";
import black_atom_jpn_tsuki_yoru from "./themes/jpn/black-atom-jpn-tsuki-yoru.ts";
import { Key, ThemeMap } from "./types/theme.ts";

export type Config = {
    dir: {
        themes: string;
    };
    adapterFileName: string;
    themeKeys: Key[];
    themeMap: ThemeMap;
};

const themeMap: ThemeMap = {
    "black-atom-corp-engineering": black_atom_corp_eng,
    "black-atom-corp-operations": null,
    "black-atom-corp-medical": null,
    "black-atom-corp-research": null,
    "black-atom-jpn-koyo-yoru": black_atom_jpn_koyo_yoru,
    "black-atom-jpn-koyo-hiru": black_atom_jpn_koyo_hiru,
    "black-atom-jpn-tsuki-yoru": black_atom_jpn_tsuki_yoru,
    "black-atom-crbn-null": null,
    "black-atom-crbn-supr": null,
    "black-atom-terra-spring-day": null,
    "black-atom-terra-spring-night": null,
    "black-atom-terra-fall-day": null,
    "black-atom-terra-fall-night": null,
    "black-atom-terra-summer-day": null,
    "black-atom-terra-summer-night": null,
    "black-atom-terra-winter-day": null,
    "black-atom-terra-winter-night": null,
};

const cwd = Deno.cwd();

export const config: Config = {
    dir: {
        themes: join(cwd, "src", "themes"),
    },
    adapterFileName: "adapter.json",
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
    themeMap,
};
