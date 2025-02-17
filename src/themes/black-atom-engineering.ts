import * as Theme from "../types/theme";

const meta: Theme.Meta = {
  key: "black-atom-engineering",
  label: "Black Atom - Default [ENG]",
  appearance: "dark",
  status: "release",
  collection: {
    key: "default",
    label: "Default"
  }
};

const primaries: Theme.Primaries = [
  // Lows
  "#040505",
  "#0e1110",
  "#181b19",
  "#1d201e",

  // Mids
  "#3e4441",
  "#565f59",
  "#606a65",
  "#79857f",

  // Highs
  "#9fafa7",
  "#abbbb3",
  "#c4d4cc",
  "#d0e0d8"
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
  white: primaries[11]
};

const ui: Theme.UI = {
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
    modify: palette.blue
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
    modify: palette.blue
  }
};

const syntax: Theme.Syntax = {
  variable: {
    default: palette.blue,
    builtin: palette.blue,
    member: palette.darkBlue,
    parameter: palette.darkYellow
  },
  property: {
    default: palette.darkBlue
  },
  string: {
    default: palette.green,
    doc: palette.green,
    regexp: palette.red,
    escape: palette.red
  },
  constant: {
    default: primaries[10],
    builtin: palette.darkRed
  },
  module: {
    default: palette.darkBlue
  },
  boolean: {
    default: palette.darkGreen
  },
  number: {
    default: palette.darkGreen
  },
  type: {
    default: palette.cyan,
    builtin: palette.darkCyan
  },
  attribute: {
    default: palette.darkYellow,
    builtin: palette.darkYellow
  },
  func: {
    default: palette.yellow,
    builtin: palette.yellow,
    method: palette.yellow
  },
  constructor: {
    default: palette.yellow
  },
  keyword: {
    default: palette.magenta,
    import: palette.red,
    export: palette.red
  },
  operator: {
    default: palette.magenta
  },
  punctuation: {
    default: palette.lightGray,
    delimiter: primaries[8],
    bracket: palette.lightGray,
    special: palette.lightGray
  },
  comment: {
    default: palette.gray,
    doc: palette.darkGreen,
    todo: palette.green,
    error: palette.red,
    warn: palette.yellow,
    info: palette.blue,
    hint: palette.darkYellow
  },
  markup: {
    heading: {
      h1: palette.yellow,
      h2: palette.yellow,
      h3: palette.yellow,
      h4: palette.lightGray,
      h5: palette.lightGray,
      h6: palette.lightGray
    },
    list: {
      default: palette.lightGray,
      checked: palette.green,
      unchecked: palette.lightGray
    },
    quote: palette.green,
    math: palette.darkGreen,
    link: palette.green,
    code: {
      fg: palette.gray,
      bg: palette.black
    }
  },
  tag: {
    default: palette.yellow,
    builtin: palette.darkYellow,
    attribute: primaries[8],
    delimiter: primaries[9]
  }
};

const theme: Theme.Definition = {
  meta,
  primaries,
  palette,
  ui,
  syntax
};

export default theme;
