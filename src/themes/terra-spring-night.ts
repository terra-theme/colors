import * as Theme from "../types/theme";

const meta: Theme.Meta = {
  key: "terra-spring-night",
  label: "Terra - Spring Night",
  appearance: "dark",
  status: "release",
  collection: {
    key: "terra",
    label: "Terra",
  },
};

const primaries: Theme.Primaries = [
  // Lows
  "#1d201f",
  "#212523",
  "#272c2a",
  "#313634",

  // Mids
  "#394740",
  "#51635a",
  "#677e72",
  "#82978c",

  // Highs
  "#b8aa94",
  "#c3b8a4",
  "#d6d0c2",
  "#e0ddd1",
];

const palette: Theme.Palette = {
  black: primaries[2],
  gray: primaries[4],

  darkRed: "#b95847",
  red: "#ba6e5f",

  darkGreen: "#6a9f60",
  green: "#8ac090",

  darkYellow: "#e89a61",
  yellow: "#d1a762",

  darkBlue: "#899ddc",
  blue: "#99b9e6",

  darkMagenta: "#d5a9c3",
  magenta: "#c6b3da",

  darkCyan: "#679980",
  cyan: "#85ad9f",

  lightGray: primaries[9],
  white: primaries[11],
};

const semantics: Theme.Semantics = {
  bg: {
    primary: {
      dark: primaries[0],
      main: primaries[1],
      light: primaries[2],
    },
    secondary: {
      dark: primaries[3],
      main: primaries[4],
      light: primaries[7],
    },
    active: primaries[5],
    match: {
      active: primaries[3],
      passive: primaries[4],
    },
    diff: {
      add: palette.green,
      delete: palette.red,
      change: palette.blue,
      text: palette.darkBlue,
    },
  },
  fg: {
    primary: {
      dark: primaries[10],
      main: primaries[11],
      light: primaries[12],
    },
    secondary: {
      dark: primaries[7],
      main: primaries[8],
      light: primaries[9],
    },
    active: palette.green,
    invert: primaries[2],
    neutral: primaries[6],
    diff: {
      add: palette.green,
      delete: palette.red,
      change: palette.blue,
      text: palette.darkBlue,
    },
  },
};

const syntax: Theme.Syntax = {
  default: semantics.fg.primary.main,
  variable: {
    default: palette.blue,
    builtin: palette.blue,
    parameter: palette.darkYellow,
    member: palette.blue,
  },
  constant: {
    default: palette.darkYellow,
    builtin: palette.darkYellow,
  },
  module: {
    default: palette.darkBlue,
  },
  string: {
    default: palette.green,
    documentation: palette.cyan,
    regexp: palette.darkYellow,
    escape: palette.red,
  },
  boolean: {
    default: palette.darkYellow,
  },
  number: {
    default: palette.darkYellow,
  },
  type: {
    default: palette.cyan,
    builtin: palette.darkCyan,
  },
  attribute: {
    default: palette.cyan,
    builtin: palette.cyan,
  },
  func: {
    default: palette.yellow,
    builtin: palette.yellow,
    method: palette.yellow,
  },
  constructor: {
    default: palette.yellow,
  },
  operator: {
    default: palette.magenta,
  },
  keyword: {
    default: palette.red,
  },
  punctuation: {
    default: semantics.fg.primary.main,
    delimiter: semantics.fg.primary.main,
    bracket: semantics.fg.primary.main,
    special: palette.cyan,
  },
  comment: {
    default: semantics.fg.neutral,
    documentation: semantics.fg.secondary.dark,
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
      h6: palette.darkYellow,
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
      url: palette.blue,
    },
    code: {
      default: palette.green,
      inline: palette.green,
      block: palette.green,
    },
    list: {
      default: semantics.fg.primary.main,
      checked: semantics.fg.active,
      listUnchecked: semantics.fg.neutral,
    },
  },
  diff: {
    neutral: semantics.fg.diff.text,
    plus: semantics.fg.invert,
    minus: semantics.fg.diff.delete,
    delta: semantics.fg.diff.change,
  },
  tag: {
    default: semantics.fg.primary.main,
    builtin: palette.darkYellow,
    custom: palette.darkYellow,
    attribute: semantics.fg.primary.main,
    delimiter: palette.darkYellow,
  },
};

const theme: Theme.Definition = {
  meta,
  primaries,
  palette,
  semantics,
  syntax,
};

export default theme;
