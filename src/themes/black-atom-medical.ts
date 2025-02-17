import * as Theme from "../types/theme";

const meta: Theme.Meta = {
  key: "black-atom-medical",
  label: "Black Atom - Medical",
  appearance: "light",
  status: "release",
  collection: {
    key: "default",
    label: "Default"
  }
};

const primaries: Theme.Primaries = [
  // Lows
  "#222325",
  "#313533",
  "#3e4542",
  "#4a514f",

  // Mids
  "#545d5a",
  "#616a65",
  "#6d7873",
  "#7a8782",

  // Highs
  "#bcc3c0",
  "#c8cfcd",
  "#d4dbd8",
  "#e6e8e6"
];

const palette: Theme.Palette = {
  black: primaries[1],
  gray: primaries[4],
  darkRed: "#5d54ad",
  red: "#7872c2",
  darkGreen: "#628942",
  green: "#6e9a4b",
  darkYellow: primaries[3],
  yellow: "#57ab52",
  darkBlue: primaries[5],
  blue: primaries[4],
  darkMagenta: "#887bd3",
  magenta: "#998ed9",
  darkCyan: "#459f55",
  cyan: "#4db15e",
  lightGray: primaries[7],
  white: primaries[10]
};

const semantics: Theme.Semantics = {
  bg: {
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
    active: primaries[4],
    match: {
      active: primaries[9],
      passive: primaries[10]
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
      dark: primaries[0],
      main: primaries[1],
      light: primaries[2]
    },
    secondary: {
      dark: primaries[3],
      main: primaries[4],
      light: primaries[5]
    },
    active: palette.cyan,
    invert: primaries[10],
    neutral: primaries[6],
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
    builtin: palette.darkBlue,
    parameter: palette.darkYellow,
    member: palette.blue
  },
  constant: {
    default: palette.darkMagenta,
    builtin: palette.magenta
  },
  module: {
    default: palette.darkBlue
  },
  string: {
    default: palette.green,
    doc: palette.darkGreen,
    regexp: palette.yellow,
    escape: palette.red
  },
  boolean: {
    default: palette.magenta
  },
  number: {
    default: palette.magenta
  },
  type: {
    default: palette.cyan,
    builtin: palette.darkCyan
  },
  attribute: {
    default: palette.cyan,
    builtin: palette.darkCyan
  },
  func: {
    default: palette.yellow,
    builtin: palette.darkYellow,
    method: palette.yellow
  },
  constructor: {
    default: palette.yellow
  },
  operator: {
    default: palette.red
  },
  keyword: {
    default: palette.red
  },
  punctuation: {
    default: semantics.fg.secondary.main,
    delimiter: semantics.fg.secondary.main,
    bracket: semantics.fg.secondary.main,
    special: palette.cyan
  },
  comment: {
    default: semantics.fg.secondary.dark,
    documentation: semantics.fg.secondary.main
  },
  markup: {
    default: semantics.fg.primary.main,
    heading: {
      default: palette.darkBlue,
      h1: palette.darkBlue,
      h2: palette.darkBlue,
      h3: palette.blue,
      h4: palette.blue,
      h5: palette.blue,
      h6: palette.blue
    },
    strong: semantics.fg.primary.dark,
    italic: semantics.fg.primary.main,
    strikethrough: semantics.fg.secondary.main,
    underline: semantics.fg.primary.main,
    quote: semantics.fg.secondary.main,
    math: palette.darkCyan,
    link: {
      default: palette.blue,
      label: palette.green,
      url: palette.darkBlue
    },
    code: {
      default: palette.green,
      inline: palette.darkGreen,
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
    plus: semantics.bg.diff.add,
    minus: semantics.bg.diff.delete,
    delta: semantics.bg.diff.change
  },
  tag: {
    default: palette.blue,
    builtin: palette.darkBlue,
    custom: palette.cyan,
    attribute: palette.green,
    delimiter: palette.red
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
