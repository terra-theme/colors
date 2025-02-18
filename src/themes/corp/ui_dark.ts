import { Palette, Primaries, UI } from "../../types/theme.ts";

export default function (primaries: Primaries, palette: Palette): UI {
    return {
        bg: {
            default: primaries[2],
            panel: primaries[1],
            float: primaries[1],
            active: primaries[3],
            disabled: primaries[5],
            hover: primaries[3],
            selection: primaries[4],
            search: primaries[4],
            contrast: primaries[11],
            negative: palette.red,
            warn: palette.yellow,
            info: palette.blue,
            hint: palette.darkYellow,
            positive: palette.green,
            add: palette.green,
            delete: palette.red,
            modify: palette.blue,
        },
        fg: {
            default: primaries[11],
            subtle: primaries[9],
            disabled: primaries[7],
            accent: palette.yellow,
            contrast: primaries[2],
            negative: palette.red,
            warn: palette.yellow,
            info: palette.blue,
            hint: palette.darkYellow,
            positive: palette.green,
            add: palette.green,
            delete: palette.red,
            modify: palette.blue,
        },
    };
}
