import * as Theme from "../types/theme";

const meta: Theme.Meta = {
  key: "black-atom-engineering",
  label: "Black Atom - Engineering",
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
  }
};

const syntax: Theme.Syntax = {
  default: semantics.fg.primary.main,
  variable: {
    default: palette.blue,
    builtin: palette.blue,
    parameter: palette.darkYellow,
    member: palette.blue
  },
  constant: {
    default: palette.darkYellow,
    builtin: palette.darkYellow
  },
  module: {
    default: palette.darkBlue
  },
  string: {
    default: palette.green,
    documentation: palette.cyan,
    regexp: palette.darkYellow,
    escape: palette.red
  },
  boolean: {
    default: palette.darkYellow
  },
  number: {
    default: palette.darkYellow
  },
  type: {
    default: palette.cyan,
    builtin: palette.darkCyan
  },
  attribute: {
    default: palette.cyan,
    builtin: palette.cyan
  },
  func: {
    default: palette.yellow,
    builtin: palette.yellow,
    method: palette.yellow
  },
  constructor: {
    default: palette.yellow
  },
  operator: {
    default: palette.magenta
  },
  keyword: {
    default: palette.red
  },
  punctuation: {
    default: semantics.fg.primary.main,
    delimiter: semantics.fg.primary.main,
    bracket: semantics.fg.primary.main,
    special: palette.cyan
  },
  comment: {
    default: semantics.fg.neutral,
    documentation: semantics.fg.secondary.dark
  },
  markup: {
    default: semantics.fg.primary.main,
    heading: {
      default: palette.darkYellow,
      h1: palette.darkYellow,
      h2: palette.darkYellow,
      h3: palette.darkYellow,
      h4: palette.darkYellow,
      h5: palette.darkYellow,
      h6: palette.darkYellow
    },
    strong: semantics.fg.primary.main,
    italic: semantics.fg.primary.main,
    strikethrough: semantics.fg.primary.main,
    underline: semantics.fg.primary.main,
    quote: semantics.fg.primary.main,
    math: semantics.fg.primary.main,
    link: {
      default: palette.blue,
      label: palette.green,
      url: palette.blue
    },
    code: {
      default: palette.green,
      inline: palette.green,
      block: palette.green
    },
    list: {
      default: semantics.fg.primary.main,
      checked: semantics.fg.active,
      unchecked: semantics.fg.neutral
    }
  },
  diff: {
    neutral: semantics.fg.diff.text,
    plus: semantics.fg.invert,
    minus: semantics.fg.diff.delete,
    delta: semantics.fg.diff.change
  },
  tag: {
    default: semantics.fg.primary.main,
    builtin: palette.darkYellow,
    custom: palette.darkYellow,
    attribute: semantics.fg.primary.main,
    delimiter: palette.darkYellow
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
