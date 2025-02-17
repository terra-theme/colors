import * as Theme from "../types/theme";

const meta: Theme.Meta = {
  key: "black-atom-operations",
  label: "Black Atom - Operations",
  appearance: "dark",
  status: "release",
  collection: {
    key: "default",
    label: "Default"
  }
};

const primaries: Theme.Primaries = [
  // Lows
  "#141515",
  "#181b1a",
  "#1c1f1e",
  "#222726",

  // Mids
  "#3b4743",
  "#52635d",
  "#5b6f68",
  "#738b83",

  // Highs
  "#9fafa7",
  "#abbbb3",
  "#c4d4cc",
  "#d0e0d8"
];

const palette: Theme.Palette = {
  black: primaries[1],
  gray: primaries[4],
  darkRed: "#9891d6",
  red: "#a6a1df",
  darkGreen: "#93c270",
  green: "#a0ce7d",
  darkYellow: primaries[8],
  yellow: "#9BE197",
  darkBlue: primaries[9],
  blue: primaries[10],
  darkMagenta: "#a498e9",
  magenta: "#b7aded",
  darkCyan: "#6ac779",
  cyan: "#88dc96",
  lightGray: primaries[7],
  white: primaries[10]
};

const semantics: Theme.Semantics = {
  bg: {
    primary: {
      dark: primaries[0],
      main: primaries[1],
      light: primaries[2]
    },
    secondary: {
      dark: primaries[3],
      main: primaries[4],
      light: primaries[5]
    },
    active: primaries[3],
    match: {
      active: primaries[3],
      passive: primaries[4]
    },
    diff: {
      add: palette.green,
      delete: palette.red,
      change: palette.blue,
      text: palette.darkBlue
    }
  },
  fg: {
    primary: {
      dark: primaries[9],
      main: primaries[10],
      light: primaries[11]
    },
    secondary: {
      dark: primaries[6],
      main: primaries[7],
      light: primaries[8]
    },
    active: palette.cyan,
    invert: primaries[1],
    neutral: primaries[5],
    diff: {
      add: palette.green,
      delete: palette.red,
      change: palette.blue,
      text: palette.darkBlue
    }
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
  semantics,
  syntax
};

export default theme;
