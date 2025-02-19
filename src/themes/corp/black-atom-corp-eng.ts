import * as Theme from "../../types/theme.ts";

import syntax_dark from "./syntax_dark.ts";
import ui_dark from "./ui_dark.ts";

const meta: Theme.Meta = {
    key: "black-atom-corp-engineering",
    label: "Black Atom - Corp Engineering",
    appearance: "dark",
    status: "release",
    collection: {
        key: "corp",
        label: "Corporate",
    },
};

const primaries: Theme.Primaries = [
    "#040505",
    "#0e1110",
    "#181b19",
    "#1d201e",
    "#3e4441",
    "#565f59",
    "#606a65",
    "#79857f",
    "#9fafa7",
    "#abbbb3",
    "#c4d4cc",
    "#d0e0d8",
];

const palette: Theme.Palette = {
    black: primaries[2],
    gray: primaries[5],

    darkRed: "#9891d6",
    red: "#a6a1df",

    darkGreen: "#93c270",
    green: "#a0ce7d",

    darkYellow: primaries[9],
    yellow: "#9BE197",

    darkBlue: primaries[8],
    blue: primaries[10],

    darkMagenta: "#a498e9",
    magenta: "#b7aded",

    darkCyan: "#6ac779",
    cyan: "#88dc96",

    lightGray: primaries[8],
    white: primaries[11],
};

const theme: Theme.Definition = {
    meta,
    primaries,
    palette,
    ui: ui_dark(primaries, palette),
    syntax: syntax_dark(primaries, palette),
};

export default theme;
