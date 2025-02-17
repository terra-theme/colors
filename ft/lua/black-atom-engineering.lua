local M = {}

---@class BlackAtom.Theme.Meta
M.meta = {
    key = "black-atom-engineering",
    label = "Black Atom - Default [ENG]",
    appearance = "dark",
    status = "release",
    collection = {
        key = "default",
        label = "Default",
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

---@class BlackAtom.Theme.UI
M.ui = {
    bg = {
        default = "#181b19",
        panel = "#0e1110",
        float = "#0e1110",
        active = "#1d201e",
        disabled = "#565f59",
        hover = "#1d201e",
        selection = "#3e4441",
        search = "#3e4441",
        contrast = "#d0e0d8",
        negative = "#a6a1df",
        warn = "#9BE197",
        info = "#c4d4cc",
        hint = "#abbbb3",
        positive = "#a0ce7d",
        add = "#a0ce7d",
        delete = "#a6a1df",
        modify = "#c4d4cc",
    },
    fg = {
        default = "#d0e0d8",
        subtle = "#abbbb3",
        accent = "#9BE197",
        disabled = "#79857f",
        contrast = "#181b19",
        negative = "#a6a1df",
        warn = "#9BE197",
        info = "#c4d4cc",
        hint = "#abbbb3",
        positive = "#a0ce7d",
        add = "#a0ce7d",
        delete = "#a6a1df",
        modify = "#c4d4cc",
    },
}

---@class BlackAtom.Theme.Syntax
M.syntax = {
    variable = {
        default = "#c4d4cc",
        builtin = "#c4d4cc",
        parameter = "#abbbb3",
        member = "#9fafa7"
    },
    constant = {
        default = "#c4d4cc",
        builtin = "#9891d6",
    },
    module = {
        default = "#9fafa7",
    },
    string = {
        default = "#a0ce7d",
        doc = "",
        regexp = "#a6a1df",
        escape = "#a6a1df"
    },
    boolean = {
        default = "#93c270"
    },
    number = {
        default = "#93c270"
    },
    type = {
        default = "#88dc96",
        builtin = "#6ac779"
    },
    attribute = {
        default = "#abbbb3",
        builtin = "#abbbb3"
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
        default = "#b7aded"
    },
    punctuation = {
        default = "#9fafa7",
        delimiter = "#9fafa7",
        bracket = "#9fafa7",
        special = "#9fafa7"
    },
    comment = {
        default = "#565f59",
        doc = ""
    },
    markup = {
        heading = {
            h1 = "#9BE197",
            h2 = "#9BE197",
            h3 = "#9BE197",
            h4 = "#9fafa7",
            h5 = "#9fafa7",
            h6 = "#9fafa7",
        },
        strong = "#9BE197",
        italic = "#9BE197",
        strikethrough = "#9BE197",
        quote = "#a0ce7d",
        math = "#93c270",
        link = "#a0ce7d",
        code = {
            fg = "#565f59",
            bg = "#181b19",
        },
        list = {
            default = "#9fafa7",
            checked =  "#a0ce7d",
            unchecked = "#9fafa7"
        },
    },
    tag = {
        default = "#9BE197",
        builtin = "#abbbb3",
        attribute = "#9fafa7",
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
