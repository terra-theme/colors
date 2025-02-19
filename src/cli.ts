import log from "./lib/log.ts";
import { ThemeMap } from "./types/theme.ts";
import generate from "./commands/generate.ts";

import black_atom_corp_eng from "./themes/corp/black-atom-corp-eng.ts";
import black_atom_jpn_koyo_yoru from "./themes/jpn/black-atom-jpn-koyo-yoru.ts";
import black_atom_jpn_koyo_hiru from "./themes/jpn/black-atom-jpn-koyo-hiru.ts";
import black_atom_jpn_tsuki_yoru from "./themes/jpn/black-atom-jpn-tsuki-yoru.ts";

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

if (import.meta.main) {
    const command = Deno.args[0];

    switch (command) {
        case "generate":
            generate(themeMap);
            break;

        case "-h":
        case "--help":
            log.menu();
            break;

        default:
            log.menu();
            Deno.exit(1);
    }
}
