import { HexColor } from "./color";

type ThemeKey =
  | "black-atom-engineering"
  | "black-atom-operations"
  | "black-atom-medical"
  | "black-atom-research"
  | "black-atom-jpn-koyo-yoru"
  | "black-atom-jpn-koyo-hiru"
  | "black-atom-jpn-tsuki-yoru"
  | "black-atom-crbn-null"
  | "black-atom-crbn-supr"
  | "black-atom-terra-spring-day"
  | "black-atom-terra-spring-night"
  | "black-atom-terra-fall-day"
  | "black-atom-terra-fall-night"
  | "black-atom-terra-summer-day"
  | "black-atom-terra-summer-night"
  | "black-atom-terra-winter-day"
  | "black-atom-terra-winter-night";

type CollectionKey = "default" | "terra" | "jpn" | "crbn";

type CollectionLabel = string;

interface Meta {
  key: ThemeKey;
  label:
    | "Black Atom - Default [ENG]"
    | "Black Atom - Default [OPS]"
    | "Black Atom - Default [MED]"
    | "Black Atom - Default [RES]";
  appearance: "light" | "dark";
  status: "development" | "beta" | "release";
  collection: {
    key: CollectionKey;
    label: CollectionLabel;
  };
}

type Primaries = [
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor
];

interface Palette {
  black: HexColor;
  gray: HexColor;
  darkRed: HexColor;
  red: HexColor;
  darkGreen: HexColor;
  green: HexColor;
  darkYellow: HexColor;
  yellow: HexColor;
  darkBlue: HexColor;
  blue: HexColor;
  darkMagenta: HexColor;
  magenta: HexColor;
  darkCyan: HexColor;
  cyan: HexColor;
  lightGray: HexColor;
  white: HexColor;
}

interface UIBackground {
  default: HexColor;
  panel: HexColor;
  float: HexColor;
  active: HexColor;
  disabled: HexColor;
  hover: HexColor;
  selection: HexColor;
  search: HexColor;
  contrast: HexColor;
  negative: HexColor;
  warn: HexColor;
  info: HexColor;
  hint: HexColor;
  positive: HexColor;
  add: HexColor;
  delete: HexColor;
  modify: HexColor;
}

interface UIForeground {
  default: HexColor;
  subtle: HexColor;
  accent: HexColor;
  disabled: HexColor;
  contrast: HexColor;
  negative: HexColor;
  warn: HexColor;
  info: HexColor;
  hint: HexColor;
  positive: HexColor;
  add: HexColor;
  delete: HexColor;
  modify: HexColor;
}

interface UI {
  bg: UIBackground;
  fg: UIForeground;
}

interface Syntax {
  variable: {
    default: HexColor;
    builtin: HexColor;
    parameter: HexColor;
    member: HexColor;
  };
  string: {
    default: HexColor;
    doc: HexColor;
    regexp: HexColor;
    escape: HexColor;
  };
  boolean: {
    default: HexColor;
  };
  number: {
    default: HexColor;
  };
  property: {
    default: HexColor;
  };
  constant: {
    default: HexColor;
    builtin: HexColor;
  };
  module: {
    default: HexColor;
  };
  type: {
    default: HexColor;
    builtin: HexColor;
  };
  attribute: {
    default: HexColor;
    builtin: HexColor;
  };
  func: {
    default: HexColor;
    builtin: HexColor;
    method: HexColor;
  };
  constructor: {
    default: HexColor;
  };
  operator: {
    default: HexColor;
  };
  keyword: {
    default: HexColor;
    import: HexColor;
    export: HexColor;
  };
  punctuation: {
    default: HexColor;
    delimiter: HexColor;
    bracket: HexColor;
    special: HexColor;
  };
  comment: {
    default: HexColor;
    doc: HexColor;
    todo: HexColor;
    error: HexColor;
    warn: HexColor;
    info: HexColor;
    hint: HexColor;
  };
  tag: {
    default: HexColor;
    builtin: HexColor;
    delimiter: HexColor;
    attribute: HexColor;
  };
  markup: {
    heading: {
      h1: HexColor;
      h2: HexColor;
      h3: HexColor;
      h4: HexColor;
      h5: HexColor;
      h6: HexColor;
    };
    list: {
      default: HexColor;
      checked: HexColor;
      unchecked: HexColor;
    };
    strong: HexColor;
    italic: HexColor;
    strikethrough: HexColor;
    quote: HexColor;
    math: HexColor;
    link: HexColor;
    code: {
      fg: HexColor;
      bg: HexColor;
    };
  };
}

interface Definition {
  meta: Meta;
  primaries: Primaries;
  palette: Palette;
  ui: UI;
  syntax: Syntax;
}

export { Meta, ThemeKey as MetaKey, CollectionKey, CollectionLabel, Primaries, Palette, UI, Syntax, Definition };
