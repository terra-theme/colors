local M = {}

---@class BlackAtom.Theme.Meta
M.meta = {
    key = "black-atom-medical",
    label = "Black Atom - Medical",
    appearance = "light",
    status = "release",
    collection = {
        key = "black_atom",
        label = "Black Atom",
    },
}

---@class BlackAtom.Theme.Primaries
M.primaries = {
    "#222325",
    "#313533",
    "#3e4542",
    "#4a514f",
    "#545d5a",
    "#616a65",
    "#6d7873",
    "#7a8782",
    "#bcc3c0",
    "#c8cfcd",
    "#d4dbd8",
    "#e6e8e6",
}

---@class BlackAtom.Theme.Palette
M.palette = {
    black = "#313533",
    gray = "#545d5a",
    dark_red = "#5d54ad",
    red = "#7872c2",
    dark_green = "#628942",
    green = "#6e9a4b",
    dark_yellow = "#4a514f",
    yellow = "#57ab52",
    dark_blue = "#616a65",
    blue = "#545d5a",
    dark_magenta = "#887bd3",
    magenta = "#998ed9",
    dark_cyan = "#459f55",
    cyan = "#4db15e",
    light_gray = "#7a8782",
    white = "#d4dbd8",
}

---@class BlackAtom.Theme.Semantics
M.semantics = {
    bg = {
        primary = {
            dark = "#222325",
            main = "#d4dbd8",
            light = "#e6e8e6",
        },
        secondary = {
            dark = "#6d7873",
            main = "#7a8782",
            light = "#bcc3c0",
        },
        active = "#545d5a",
        match = {
            active = "#c8cfcd",
            passive = "#d4dbd8",
        },
        diff = {
            add = "#6e9a4b",
            delete = "#7872c2",
            change = "#545d5a",
            text = "#616a65",
        },
    },
    fg = {
        primary = {
            dark = "#222325",
            main = "#313533",
            light = "#3e4542",
        },
        secondary = {
            dark = "#4a514f",
            main = "#545d5a",
            light = "#616a65",
        },
        active = "#4db15e",
        invert = "#d4dbd8",
        neutral = "#6d7873",
        diff = {
            add = "#6e9a4b",
            delete = "#7872c2",
            change = "#545d5a",
            text = "#616a65",
        },
    },
}

---@class BlackAtom.Theme.Syntax
M.syntax = {
    default = "#313533",
    variable = {
        default = "#545d5a",
        builtin = "#616a65",
        parameter = "#4a514f",
        member = "#545d5a"
    },
    constant = {
        default = "#887bd3",
        builtin = "#998ed9",
    },
    module = {
        default = "#616a65",
    },
    string = {
        default = "#6e9a4b",
        documentation = "#628942",
        regexp = "#57ab52",
        escape = "#7872c2"
    },
    boolean = {
        default = "#998ed9"
    },
    number = {
        default = "#998ed9"
    },
    type = {
        default = "#4db15e",
        builtin = "#459f55"
    },
    attribute = {
        default = "#4db15e",
        builtin = "#459f55"
    },
    func = {
        default = "#57ab52",
        builtin = "#4a514f",
        method = "#57ab52"
    },
    constructor = {
        default = "#57ab52"
    },
    operator = {
        default = "#7872c2"
    },
    keyword = {
        default = "#7872c2"
    },
    punctuation = {
        default = "#545d5a",
        delimiter = "#545d5a",
        bracket = "#545d5a",
        special = "#4db15e"
    },
    comment = {
        default = "#4a514f",
        documentation = "#545d5a"
    },
    markup = {
        default = "#313533",
        heading = {
            default = "#616a65",
            h1 = "#616a65",
            h2 = "#616a65",
            h3 = "#545d5a",
            h4 = "#545d5a",
            h5 = "#545d5a",
            h6 = "#545d5a",
        },
        strong = "#222325",
        italic = "#313533",
        strikethrough = "#545d5a",
        underline = "#313533",
        quote = "#545d5a",
        math = "#459f55",
        link = {
            default = "#545d5a",
            label = "#6e9a4b",
            url = "#616a65"
        },
        code = {
            default = "#6e9a4b",
            inline = "#628942",
            block = "#6e9a4b",
        },
        list = {
            default = "#313533",
            checked =  "#4db15e",
            listUnchecked = ""
        },
    },
    diff = {
        plus = "#6e9a4b",
        minus = "#7872c2",
        delta = "#545d5a",
        text = ""
    },
    tag = {
        default = "#545d5a",
        builtin = "#616a65",
        custom = "#4db15e",
        attribute = "#6e9a4b",
        delimiter = "#7872c2"
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
