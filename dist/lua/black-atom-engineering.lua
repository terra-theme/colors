local M = {}

---@class BlackAtom.Theme.Meta
M.meta = {
    key = "black-atom-engineering",
    label = "Black Atom - Engineering",
    appearance = "dark",
    status = "release",
    collection = {
        key = "black_atom",
        label = "Black Atom",
    },
}

---@class BlackAtom.Theme.Primaries
M.primaries = {
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
}

---@class BlackAtom.Theme.Palette
M.palette = {
    black = "#181b19",
    gray = "#565f59",
    dark_red = "#9891d6",
    red = "#a6a1df",
    dark_green = "#93c270",
    green = "#a0ce7d",
    dark_yellow = "#abbbb3",
    yellow = "#9BE197",
    dark_blue = "#9fafa7",
    blue = "#c4d4cc",
    dark_magenta = "#a498e9",
    magenta = "#b7aded",
    dark_cyan = "#6ac779",
    cyan = "#88dc96",
    light_gray = "#9fafa7",
    white = "#d0e0d8",
}

---@class BlackAtom.Theme.Semantics
M.semantics = {
    bg = {
        primary = {
            dark = "#040505",
            main = "#0e1110",
            light = "#181b19",
        },
        secondary = {
            dark = "#1d201e",
            main = "#3e4441",
            light = "#565f59",
        },
        active = "#1d201e",
        match = {
            active = "#181b19",
            passive = "#1d201e",
        },
        diff = {
            add = "#a0ce7d",
            delete = "#a6a1df",
            change = "#c4d4cc",
            text = "#9fafa7",
        },
    },
    fg = {
        primary = {
            dark = "#abbbb3",
            main = "#c4d4cc",
            light = "#d0e0d8",
        },
        secondary = {
            dark = "#606a65",
            main = "#79857f",
            light = "#9fafa7",
        },
        active = "#88dc96",
        invert = "#0e1110",
        neutral = "#565f59",
        diff = {
            add = "#a0ce7d",
            delete = "#a6a1df",
            change = "#c4d4cc",
            text = "#9fafa7",
        },
    },
}

---@class BlackAtom.Theme.Syntax
M.syntax = {
    default = "#c4d4cc",
    variable = {
        default = "#c4d4cc",
        builtin = "#c4d4cc",
        parameter = "#abbbb3",
        member = "#c4d4cc"
    },
    constant = {
        default = "#abbbb3",
        builtin = "#abbbb3",
    },
    module = {
        default = "#9fafa7",
    },
    string = {
        default = "#a0ce7d",
        documentation = "#88dc96",
        regexp = "#abbbb3",
        escape = "#a6a1df"
    },
    boolean = {
        default = "#abbbb3"
    },
    number = {
        default = "#abbbb3"
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
        default = "#565f59",
        documentation = "#606a65"
    },
    markup = {
        default = "#c4d4cc",
        heading = {
            default = "#abbbb3",
            h1 = "#abbbb3",
            h2 = "#abbbb3",
            h3 = "#abbbb3",
            h4 = "#abbbb3",
            h5 = "#abbbb3",
            h6 = "#abbbb3",
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
        plus = "#0e1110",
        minus = "#a6a1df",
        delta = "#c4d4cc",
        text = ""
    },
    tag = {
        default = "#c4d4cc",
        builtin = "#abbbb3",
        custom = "#abbbb3",
        attribute = "#c4d4cc",
        delimiter = "#abbbb3"
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
