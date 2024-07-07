So you know what I am doing here, I will explain something to you.

I convert these theme definitions into serveral formats, including CSS, Lua, and SCSS, with ejs templating.

For example these lua/ts theme definitions, I have let you convert, will be put into this format:

```lua
local M = {}

---@class BlackAtom.Theme.Meta
M.meta = {
    key = "<%= theme.meta.key %>",
    label = "<%= theme.meta.label %>",
    appearance = "<%= theme.meta.appearance %>",
    status = "<%= theme.meta.status %>",
    collection = {
        key = "<%= theme.meta.collection.key %>",
        label = "<%= theme.meta.collection.label %>",
    },
}

---@class BlackAtom.Theme.Primaries
M.primaries = {
    "<%= theme.primaries[0] %>",
    "<%= theme.primaries[1] %>",
    "<%= theme.primaries[2] %>",
    "<%= theme.primaries[3] %>",
    "<%= theme.primaries[4] %>",
    "<%= theme.primaries[5] %>",
    "<%= theme.primaries[6] %>",
    "<%= theme.primaries[7] %>",
    "<%= theme.primaries[8] %>",
    "<%= theme.primaries[9] %>",
    "<%= theme.primaries[10] %>",
    "<%= theme.primaries[11] %>",
}

---@class BlackAtom.Theme.Palette
M.palette = {
    black = "<%= theme.palette.black %>",
    gray = "<%= theme.palette.gray %>",
    dark_red = "<%= theme.palette.darkRed %>",
    red = "<%= theme.palette.red %>",
    dark_green = "<%= theme.palette.darkGreen %>",
    green = "<%= theme.palette.green %>",
    dark_yellow = "<%= theme.palette.darkYellow %>",
    yellow = "<%= theme.palette.yellow %>",
    dark_blue = "<%= theme.palette.darkBlue %>",
    blue = "<%= theme.palette.blue %>",
    dark_magenta = "<%= theme.palette.darkMagenta %>",
    magenta = "<%= theme.palette.magenta %>",
    dark_cyan = "<%= theme.palette.darkCyan %>",
    cyan = "<%= theme.palette.cyan %>",
    light_gray = "<%= theme.palette.lightGray %>",
    white = "<%= theme.palette.white %>",
}

---@class BlackAtom.Theme.Semantics
M.semantics = {
    bg = {
        primary = {
            dark = "<%= theme.primaries[0] %>",
            main = "<%= theme.semantics.bg.primary.main %>",
            light = "<%= theme.semantics.bg.primary.light %>",
        },
        secondary = {
            dark = "<%= theme.semantics.bg.secondary.dark %>",
            main = "<%= theme.semantics.bg.secondary.main %>",
            light = "<%= theme.semantics.bg.secondary.light %>",
        },
        active = "<%= theme.semantics.bg.active %>",
        match = {
            active = "<%= theme.semantics.bg.match.active %>",
            passive = "<%= theme.semantics.bg.match.passive %>",
        },
        diff = {
            add = "<%= theme.semantics.bg.diff.add %>",
            delete = "<%= theme.semantics.bg.diff.delete %>",
            change = "<%= theme.semantics.bg.diff.change %>",
            text = "<%= theme.semantics.bg.diff.text %>",
        },
    },
    fg = {
        primary = {
            dark = "<%= theme.semantics.fg.primary.dark %>",
            main = "<%= theme.semantics.fg.primary.main %>",
            light = "<%= theme.semantics.fg.primary.light %>",
        },
        secondary = {
            dark = "<%= theme.semantics.fg.secondary.dark %>",
            main = "<%= theme.semantics.fg.secondary.main %>",
            light = "<%= theme.semantics.fg.secondary.light %>",
        },
        active = "<%= theme.semantics.fg.active %>",
        invert = "<%= theme.semantics.fg.invert %>",
        neutral = "<%= theme.semantics.fg.neutral %>",
        diff = {
            add = "<%= theme.semantics.fg.diff.add %>",
            delete = "<%= theme.semantics.fg.diff.delete %>",
            change = "<%= theme.semantics.fg.diff.change %>",
            text = "<%= theme.semantics.fg.diff.text %>",
        },
    },
}

---@class BlackAtom.Theme.Syntax
M.syntax = {
    default = "<%= theme.syntax.default %>",
    variable = {
        default = "<%= theme.syntax.variable.default %>",
        builtin = "<%= theme.syntax.variable.builtin %>",
        parameter = "<%= theme.syntax.variable.parameter %>",
        member = "<%= theme.syntax.variable.member %>"
    },
    constant = {
        default = "<%= theme.syntax.constant.default %>",
        builtin = "<%= theme.syntax.constant.builtin %>",
    },
    module = {
        default = "<%= theme.syntax.module.default %>",
    },
    string = {
        default = "<%= theme.syntax.string.default %>",
        documentation = "<%= theme.syntax.string.documentation %>",
        regexp = "<%= theme.syntax.string.regexp %>",
        escape = "<%= theme.syntax.string.escape %>"
    },
    boolean = {
        default = "<%= theme.syntax.boolean.default %>"
    },
    number = {
        default = "<%= theme.syntax.number.default %>"
    },
    type = {
        default = "<%= theme.syntax.type.default %>",
        builtin = "<%= theme.syntax.type.builtin %>"
    },
    attribute = {
        default = "<%= theme.syntax.attribute.default %>",
        builtin = "<%= theme.syntax.attribute.builtin %>"
    },
    func = {
        default = "<%= theme.syntax.func.default %>",
        builtin = "<%= theme.syntax.func.builtin %>",
        method = "<%= theme.syntax.func.method %>"
    },
    constructor = {
        default = "<%= theme.syntax.constructor.default %>"
    },
    operator = {
        default = "<%= theme.syntax.operator.default %>"
    },
    keyword = {
        default = "<%= theme.syntax.keyword.default %>"
    },
    punctuation = {
        default = "<%= theme.syntax.punctuation.default %>",
        delimiter = "<%= theme.syntax.punctuation.delimiter %>",
        bracket = "<%= theme.syntax.punctuation.bracket %>",
        special = "<%= theme.syntax.punctuation.special %>"
    },
    comment = {
        default = "<%= theme.syntax.comment.default %>",
        documentation = "<%= theme.syntax.comment.documentation %>"
    },
    markup = {
        default = "<%= theme.syntax.markup.default %>",
        heading = {
            default = "<%= theme.syntax.markup.heading.default %>",
            h1 = "<%= theme.syntax.markup.heading.h1 %>",
            h2 = "<%= theme.syntax.markup.heading.h2 %>",
            h3 = "<%= theme.syntax.markup.heading.h3 %>",
            h4 = "<%= theme.syntax.markup.heading.h4 %>",
            h5 = "<%= theme.syntax.markup.heading.h5 %>",
            h6 = "<%= theme.syntax.markup.heading.h6 %>",
        },
        strong = "<%= theme.syntax.markup.strong %>",
        italic = "<%= theme.syntax.markup.italic %>",
        strikethrough = "<%= theme.syntax.markup.strikethrough %>",
        underline = "<%= theme.syntax.markup.underline %>",
        quote = "<%= theme.syntax.markup.quote %>",
        math = "<%= theme.syntax.markup.math %>",
        link = {
            default = "<%= theme.syntax.markup.link.default %>",
            label = "<%= theme.syntax.markup.link.label %>",
            url = "<%= theme.syntax.markup.link.url %>"
        },
        code = {
            default = "<%= theme.syntax.markup.code.default %>",
            inline = "<%= theme.syntax.markup.code.inline %>",
            block = "<%= theme.syntax.markup.code.block %>",
        },
        list = {
            default = "<%= theme.syntax.markup.list.default %>",
            checked =  "<%= theme.syntax.markup.list.checked %>",
            listUnchecked = "<%= theme.syntax.markup.list.listUnchecked %>"
        },
    },
    diff = {
        plus = "<%= theme.syntax.diff.plus %>",
        minus = "<%= theme.syntax.diff.minus %>",
        delta = "<%= theme.syntax.diff.delta %>",
        text = "<%= theme.syntax.diff.text %>"
    },
    tag = {
        default = "<%= theme.syntax.tag.default %>",
        builtin = "<%= theme.syntax.tag.builtin %>",
        custom = "<%= theme.syntax.tag.custom %>",
        attribute = "<%= theme.syntax.tag.attribute %>",
        delimiter = "<%= theme.syntax.tag.delimiter %>"
    }
}

---@class BlackAtom.Theme.Colors
M.colors = {
    none = "none",
    debug = M.debug,
    primaries = M.primaries,
    palette = M.palette,
    semantics = M.semantics,
    syntax = M.syntax,
}

return M
```

This works well, but I need your help expanding the templates for `css` and `scss`.

This is what they look like now:

`src/templates/css.ejs`

```ejs
:root {
    --black-atom-<%= theme.meta.key %>-primary-0: <%= theme.primaries[0] %>;
    --black-atom-<%= theme.meta.key %>-primary-1: <%= theme.primaries[1] %>;
    --black-atom-<%= theme.meta.key %>-primary-2: <%= theme.primaries[2] %>;
    --black-atom-<%= theme.meta.key %>-primary-3: <%= theme.primaries[3] %>;
    --black-atom-<%= theme.meta.key %>-primary-4: <%= theme.primaries[4] %>;
    --black-atom-<%= theme.meta.key %>-primary-5: <%= theme.primaries[5] %>;
    --black-atom-<%= theme.meta.key %>-primary-6: <%= theme.primaries[6] %>;
    --black-atom-<%= theme.meta.key %>-primary-7: <%= theme.primaries[7] %>;
    --black-atom-<%= theme.meta.key %>-primary-8: <%= theme.primaries[8] %>;
    --black-atom-<%= theme.meta.key %>-primary-9: <%= theme.primaries[9] %>;
    --black-atom-<%= theme.meta.key %>-primary-10: <%= theme.primaries[10] %>;
    --black-atom-<%= theme.meta.key %>-primary-11: <%= theme.primaries[11] %>;
}
```

`src/templates/scss.ejs`

```ejs
$black-atom-<%= theme.meta.key %>-primary-0: <%= theme.primaries[0] %>;
$black-atom-<%= theme.meta.key %>-primary-1: <%= theme.primaries[1] %>;
$black-atom-<%= theme.meta.key %>-primary-2: <%= theme.primaries[2] %>;
$black-atom-<%= theme.meta.key %>-primary-3: <%= theme.primaries[3] %>;
$black-atom-<%= theme.meta.key %>-primary-4: <%= theme.primaries[4] %>;
$black-atom-<%= theme.meta.key %>-primary-5: <%= theme.primaries[5] %>;
$black-atom-<%= theme.meta.key %>-primary-6: <%= theme.primaries[6] %>;
$black-atom-<%= theme.meta.key %>-primary-7: <%= theme.primaries[7] %>;
$black-atom-<%= theme.meta.key %>-primary-8: <%= theme.primaries[8] %>;
$black-atom-<%= theme.meta.key %>-primary-9: <%= theme.primaries[9] %>;
$black-atom-<%= theme.meta.key %>-primary-10: <%= theme.primaries[10] %>;
$black-atom-<%= theme.meta.key %>-primary-11: <%= theme.primaries[11] %>;
```

Can you help me expand the templates for `css` and `scss` in a sensible way?