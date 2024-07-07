local M = {}

---@class BlackAtom.Theme.Meta
M.meta = {
    key = "black-atom-operations",
    label = "Black Atom - Operations",
    appearance = "dark",
    status = "release",
    collection = {
        key = "black_atom",
        label = "Black Atom",
    },
}

---@class BlackAtom.Theme.Primaries
M.primaries = {
    "#141515",
    "#181b1a",
    "#1c1f1e",
    "#222726",
    "#3b4743",
    "#52635d",
    "#5b6f68",
    "#738b83",
    "#9fafa7",
    "#abbbb3",
    "#c4d4cc",
    "#d0e0d8",
}

---@class BlackAtom.Theme.Palette
M.palette = {
    black = "#181b1a",
    gray = "#3b4743",
    dark_red = "#9891d6",
    red = "#a6a1df",
    dark_green = "#93c270",
    green = "#a0ce7d",
    dark_yellow = "#9fafa7",
    yellow = "#9BE197",
    dark_blue = "#abbbb3",
    blue = "#c4d4cc",
    dark_magenta = "#a498e9",
    magenta = "#b7aded",
    dark_cyan = "#6ac779",
    cyan = "#88dc96",
    light_gray = "#738b83",
    white = "#c4d4cc",
}

---@class BlackAtom.Theme.Semantics
M.semantics = {
    bg = {
        primary = {
            dark = "#141515",
            main = "#181b1a",
            light = "#1c1f1e",
        },
        secondary = {
            dark = "#222726",
            main = "#3b4743",
            light = "#52635d",
        },
        active = "#222726",
        match = {
            active = "#222726",
            passive = "#3b4743",
        },
        diff = {
            add = "#a0ce7d",
            delete = "#a6a1df",
            change = "#c4d4cc",
            text = "#abbbb3",
        },
    },
    fg = {
        primary = {
            dark = "#abbbb3",
            main = "#c4d4cc",
            light = "#d0e0d8",
        },
        secondary = {
            dark = "#5b6f68",
            main = "#738b83",
            light = "#9fafa7",
        },
        active = "#88dc96",
        invert = "#181b1a",
        neutral = "#52635d",
        diff = {
            add = "#a0ce7d",
            delete = "#a6a1df",
            change = "#c4d4cc",
            text = "#abbbb3",
        },
    },
}

---@class BlackAtom.Theme.Syntax
M.syntax = {
    default = "#c4d4cc",
    variable = {
        default = "#c4d4cc",
        builtin = "#c4d4cc",
        parameter = "#9fafa7",
        member = "#c4d4cc"
    },
    constant = {
        default = "#9fafa7",
        builtin = "#9fafa7",
    },
    module = {
        default = "#abbbb3",
    },
    string = {
        default = "#a0ce7d",
        documentation = "#88dc96",
        regexp = "#9fafa7",
        escape = "#a6a1df"
    },
    boolean = {
        default = "#9fafa7"
    },
    number = {
        default = "#9fafa7"
    },
    type = {
        default = "#88dc96",
        builtin = "#6ac779"
    },
    attribute = {
        default = "#88dc96",
        builtin = "#88dc96"
    },
    func = {
        default = "#9BE197",
        builtin = "#9BE197",
        method = "#9BE197"
    },
    constructor = {
        default = "#9BE197"
    },
    operator = {
        default = "#b7aded"
    },
    keyword = {
        default = "#a6a1df"
    },
    punctuation = {
        default = "#c4d4cc",
        delimiter = "#c4d4cc",
        bracket = "#c4d4cc",
        special = "#88dc96"
    },
    comment = {
        default = "#52635d",
        documentation = "#5b6f68"
    },
    markup = {
        default = "#c4d4cc",
        heading = {
            default = "#9fafa7",
            h1 = "#9fafa7",
            h2 = "#9fafa7",
            h3 = "#9fafa7",
            h4 = "#9fafa7",
            h5 = "#9fafa7",
            h6 = "#9fafa7",
        },
        strong = "#c4d4cc",
        italic = "#c4d4cc",
        strikethrough = "#c4d4cc",
        underline = "#c4d4cc",
        quote = "#c4d4cc",
        math = "#c4d4cc",
        link = {
            default = "#c4d4cc",
            label = "#a0ce7d",
            url = "#c4d4cc"
        },
        code = {
            default = "#a0ce7d",
            inline = "#a0ce7d",
            block = "#a0ce7d",
        },
        list = {
            default = "#c4d4cc",
            checked =  "#88dc96",
            listUnchecked = ""
        },
    },
    diff = {
        plus = "#181b1a",
        minus = "#a6a1df",
        delta = "#c4d4cc",
        text = ""
    },
    tag = {
        default = "#c4d4cc",
        builtin = "#9fafa7",
        custom = "#9fafa7",
        attribute = "#c4d4cc",
        delimiter = "#9fafa7"
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
