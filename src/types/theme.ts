type HexColor = `#${string}`;

interface Meta {
  key:
    | "black-atom-engineering"
    | "black-atom-operations"
    | "black-atom-medical"
    | "black-atom-research"
    | "terra-spring-day"
    | "terra-spring-night"
    | "terra-summer-day"
    | "terra-summer-night"
    | "terra-winter-day"
    | "terra-winter-night";
  label: "Black Atom Engineering";
  appearance: "light" | "dark";
  status: "development" | "beta" | "release";
  collection: {
    key: "black-atom" | "terra";
    label: "Black Atom" | "Terra";
  };
}

interface Primaries {
  [index: number]: HexColor;
}

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

interface Shades {
  dark: HexColor;
  main: HexColor;
  light: HexColor;
}

interface Git {
  text: HexColor;
  add: HexColor;
  delete: HexColor;
  change: HexColor;
}

interface Background {
  primary: Shades;
  secondary: Shades;
  active: HexColor;
  match: {
    active: HexColor;
    passive: HexColor;
  };
  diff: Git;
}

interface Foreground {
  primary: Shades;
  secondary: Shades;
  active: HexColor;
  neutral: HexColor;
  invert: HexColor;
  diff: Git;
}

interface Semantics {
  bg: Background;
  fg: Foreground;
}

/** Inspired by :h treesitter-highlight-groups */
interface Syntax {
  variable: {
    /** Default variable color
     *
     * ```ts
     * // `myVar` and `count` would be `default`
     * let myVar = 10;
     * const count = 20;
     * ```
     */
    default: HexColor;
    /** Built-in variable names (e.g. `this`, `self`)
     *
     * ```ts
     * // `this` and `self` would be `builtin`
     * this.name = "John";
     * ```
     */
    builtin: HexColor;
    /** Function parameter variables
     *
     * ```ts
     * // `a` and `b` would be `parameter`
     * function sum(a, b) {
     *   return a + b;
     * }
     * ```
     */
    parameter: HexColor;
    /** Object and struct fields
     *
     * ```ts
     * // `name` and `age` would be `member` in `person`
     * const person = {
     *   name: "John",
     *   age: 30,
     * };
     * ```
     */
    member: HexColor;
  };
  constant: {
    /** Constant identifiers
     *
     * ```ts
     * // `PI` and `MAX_VALUE` would be `default`
     * const PI = 3.14;
     * const MAX_VALUE = 100;
     * ```
     */
    default: HexColor;
    /** Built-in constant values
     *
     * ```ts
     * // `Math.PI` and `Number.MAX_VALUE` would be `builtin`
     * console.log(Math.PI);
     * console.log(Number.MAX_VALUE);
     * ```
     */
    builtin: HexColor;
  };
  module: {
    /** Module names
     *
     * ```ts
     * // `math` and `utils` would be `module`
     * import math from "./math";
     * import utils from "./utils";
     * ```
     */
    default: HexColor;
  };
  string: {
    /** String literals
     *
     * ```ts
     * // `"hello"` and `'world'` would be `default`
     * const greeting = "hello";
     * const response = 'world';
     * ```
     */
    default: HexColor;
    /** String documenting code (e.g. Python docstrings)
     *
     * ```python
     * """
     * This is a docstring
     * """
     * def my_function():
     *     pass
     * ```
     */
    documentation: HexColor;
    /** Regular expressions
     *
     * ```ts
     * // `/\d+/` would be `regexp`
     * const regex = /\d+/;
     * ```
     */
    regexp: HexColor;
    /** Escape sequences
     *
     * ```ts
     * // `\n` and `\t` would be `escape`
     * const newline = "\n";
     * const tab = "\t";
     * ```
     */
    escape: HexColor;
  };
  boolean: {
    /** Boolean literals
     *
     * ```ts
     * // `true` and `false` would be `boolean`
     * const isTrue = true;
     * const isFalse = false;
     * ```
     */
    default: HexColor;
  };
  number: {
    /** Numeric literals
     *
     * ```ts
     * // `123` and `456` would be `default`
     * const num1 = 123;
     * const num2 = 456;
     * ```
     */
    default: HexColor;
  };
  type: {
    /** Type or class definitions and annotations
     *
     * ```ts
     * // `MyType` would be `type.default`
     * type MyType = string | number
     * ```
     */
    default: HexColor;
    /** Built-in types
     *
     * ```ts
     * // `string` and `number` would be `type.builtin`
     * type MyType = string | number
     * ```
     */
    builtin: HexColor;
  };
  attribute: {
    /** Attribute annotations
     *
     * ```ts
     * // `@decorator` would be `attribute.default`
     * @decorator
     * class MyClass {}
     * ```
     */
    default: HexColor;
    /** Built-in annotations
     *
     * ```python
     * // `@staticmethod` in Python would be `builtin`
     * class Circle:
     *    @staticmethod
     *    def __init__(self, radius):
     *        self.radius = radius
     * ```
     */
    builtin: HexColor;
  };
  function: {
    /** Function definitions
     *
     * ```ts
     * // `myFunc` would be the target (`function.default`).
     * function myFunc() {}
     * ```
     */
    default: HexColor;
    /** Built-in functions
     *
     * ```go
     * // `append` would be the target (`function.builtin`).
     * newFruits := append(fruits, "orange")
     * ```
     */
    builtin: HexColor;
    /** Method definitions
     *
     * ```ts
     * // `myMethod` in `class MyClass { myMethod() {} }` would be `method`
     * class MyClass {
     *   myMethod() {}
     * }
     * ```
     */
    method: HexColor;
  };
  constructor: {
    /** Constructor calls and definitions
     *
     * ```ts
     * // `Car` would be `constructor.default`.
     *
     * const obj = new Car("My Car", "Red");
     * ```
     */
    default: HexColor;
  };
  operator: {
    /** For operatators like `+` and `*`
     *
     * ```ts
     * const result = 1 + 2 * 3;
     * ```
     */
    default: HexColor;
  };
  keyword: {
    /** For keywords like `if`, `else` and `return`.
     *
     * ```ts
     * if (true) {
     *   return "Hello, world!";
     * } else {
     *   return "Goodbye, world!";
     * }
     * ```
     */
    default: HexColor;
  };
  punctuation: {
    /** Fallback for generic punctuation */
    default: HexColor;
    /** For delimiters like `;` and `:`
     *
     * ```ts
     * // `;` would be `punctuation.delimiter`
     * const x = 10;
     * // `:` would be `punctuation.delimiter`
     *  constructor(radius: number) {
     * ```
     */
    delimiter: HexColor;
    /** For brackets like `()`, `{}` and `[]`
     *
     * ```ts
     * // `()`, `{}`, `[]` in TypeScript would be `bracket`
     * function myFunc() {
     *   const arr = [1, 2, 3];
     * }
     * ```
     */
    bracket: HexColor;
    /** Special symbols
     *
     * ```ts
     * // `${}` in string interpolation in TypeScript would be `special`
     * const str = `Hello ${name}`;
     * ```
     */
    special: HexColor;
  };
  comment: {
    /** For Line and block comments.
     *
     * ```ts
     * // This is a comment
     * ```
     */
    default: HexColor;
    /** For Comments documenting code.
     *
     * ```ts
     * /**
     *  * This a documentation comment for myFunc.
     *  * /
     * function myFunc() {}
     * ```
     */
    documentation: HexColor;
  };
  markup: {
    /** Default markup color
     *
     * ```markdown
     * Hello, world!
     * ```
     */
    default: HexColor;
    /** Headings, titles (including markers)
     *
     * ```markdown
     * // `# Heading 1` in Markdown would be `markdown.heading.h1`
     * # Heading 1
     * ```
     */
    heading: {
      default: HexColor;
      h1: HexColor;
      h2: HexColor;
      h3: HexColor;
      h4: HexColor;
      h5: HexColor;
      h6: HexColor;
    };
    /** Bold text
     *
     * ```markdown
     * // `**bold**` in Markdown would be `strong`
     * **bold**
     * ```
     */
    strong: HexColor;
    /** Italic text
     *
     * ```markdown
     * // `_italic_` in Markdown would be `italic`
     * _italic_
     * ```
     */
    italic: HexColor;
    /** Struck-through text
     *
     * ```markdown
     * // `~~strikethrough~~` in Markdown would be `strikethrough`
     * ~~strikethrough~~
     * ```
     */
    strikethrough: HexColor;
    /** Underlined text (only for literal underline markup!)
     *
     * ```markdown
     * // `<u>underline</u>` in Markdown would be `underline`
     * <u>underline</u>
     * ```
     */
    underline: HexColor;
    /** Block quotes
     *
     * ```markdown
     * // `> quote` in Markdown would be `quote`
     * > quote
     * ```
     */
    quote: HexColor;
    /** Math environments
     *
     * ```latex
     * // `$ ... $` in LaTeX would be `math`
     * $E = mc^2$
     * ```
     */
    math: HexColor;
    /** Text references, footnotes, citations, etc.
     *
     * ```markdown
     * `[text](url)` in Markdown would be `link`
     * ```
     */
    link: {
      /** Link, reference descriptions
       *
       * ```markdown
       * // `[label]` in Markdown would be `linkLabel`
       * [OpenAI]: https://www.openai.com
       * ```
       */
      default: HexColor;
      /** The label of a link.
       *
       * ```markdown
       * // `Google` in Markdown would be `markup.link.label`
       * [Google](https://www.google.com)
       * ```
       */
      label: HexColor;
      /** The URL of a link.
       *
       * ```markdown
       * // `https://www.google.com` in Markdown would be `markup.link.url`
       * [Google](https://www.google.com)
       * ```
       */
      url: HexColor;
    };
    code: {
      /** Literal or verbatim text (e.g. inline code)
       *
       * ```markdown
       * // `` `code` `` in Markdown would be `raw`
       * `code`
       * ```
       */
      default: HexColor;
      /** Inline code
       *
       * ```markdown
       * // `code` in Markdown would be `inlineCode`
       * `code`
       * ```
       */
      inline: HexColor;
      /** Literal or verbatim text as a stand-alone block
       *
       * ```markdown
       * // ``` `code block` ``` in Markdown would be `rawBlock`
       * ```
       * code block
       * ```
       * ```
       */
      block: HexColor;
    };
    /** Lists
     *
     * ```markdown
     * // `- item` in Markdown would be `list`
     * - item
     * ```
     */
    list: {
      /** Fallback for generic lists */
      default: HexColor;
      /** Checked todo-style list markers
       *
       * ```markdown
       * // `- [x] item` in Markdown would be `listChecked`
       * - [x] item
       * ```
       */
      checked: HexColor;
      /** Unchecked todo-style list markers
       *
       * ```markdown
       * // `- [ ] item` in Markdown would be `listUnchecked`
       * - [ ] item
       * ```
       */
      listUnchecked: HexColor;
    };
  };
  diff: {
    /** Added text (for diff files)
     *
     * ```diff
     * // `+ added text` in diff would be `plus`
     * + added text
     * ```
     */
    plus: HexColor;
    /** Deleted text (for diff files)
     *
     * ```diff
     * // `- deleted text` in diff would be `minus`
     * - deleted text
     * ```
     */
    minus: HexColor;
    /** Changed text (for diff files)
     *
     * ```diff
     * // `! changed text` in diff would be `delta`
     * ! changed text
     * ```
     */
    delta: HexColor;
  };
  tag: {
    /** Fallback for generic tag names */
    default: HexColor;
    /** XML-style tag names
     *
     * ```typescriptreact
     * <p>Hello there</p>
     * ```
     */
    builtin: HexColor;
    /** Custom tag names
     *
     * ```typescriptreact
     * // Example: `CustomComponent`
     * <CustomComponent>Hello there</CustomComponent>
     * ```
     */
    custom: HexColor;
    /** Attributes in XML-style tags
     *
     * ```html
     * // Example: `class` would be the `attribute`
     * <div class="container"></div>
     * ```
     */
    attribute: HexColor;
    /** Tag delimiters
     *
     * ```html
     * // `<` and `>` in HTML would be `delimiter`
     * <div></div>
     * ```
     */
    delimiter: HexColor;
  };
}

interface Definition {
  meta: Meta;
  primaries: Primaries;
  palette: Palette;
  semantics: Semantics;
  syntax: Syntax;
}

export { Meta, Primaries, Palette, Semantics, Syntax, Definition };
