local M = {}

---@class BlackAtom.Theme.Meta
M.meta = {
    key = "terra-spring-night",
    label = "Terra - Spring Night",
    appearance = "dark",
    status = "release",
    collection = {
        key = "terra",
        label = "Terra",
    },
}

---@class BlackAtom.Theme.Primaries
M.primaries = {
    "#1d201f",
    "#212523",
    "#272c2a",
    "#313634",
    "#394740",
    "#51635a",
    "#677e72",
    "#82978c",
    "#b8aa94",
    "#c3b8a4",
    "#d6d0c2",
    "#e0ddd1",
}

---@class BlackAtom.Theme.Palette
M.palette = {
    black = "#272c2a",
    gray = "#394740",
    dark_red = "#b95847",
    red = "#ba6e5f",
    dark_green = "#6a9f60",
    green = "#8ac090",
    dark_yellow = "#e89a61",
    yellow = "#d1a762",
    dark_blue = "#899ddc",
    blue = "#99b9e6",
    dark_magenta = "#d5a9c3",
    magenta = "#c6b3da",
    dark_cyan = "#679980",
    cyan = "#85ad9f",
    light_gray = "#c3b8a4",
    white = "#e0ddd1",
}

---@class BlackAtom.Theme.Semantics
M.semantics = {
    bg = {
        primary = {
            dark = "#1d201f",
            main = "#212523",
            light = "#272c2a",
        },
        secondary = {
            dark = "#313634",
            main = "#394740",
            light = "#82978c",
        },
        active = "#51635a",
        match = {
            active = "#313634",
            passive = "#394740",
        },
        diff = {
            add = "#8ac090",
            delete = "#ba6e5f",
            change = "#99b9e6",
            text = "#899ddc",
        },
    },
    fg = {
        primary = {
            dark = "#d6d0c2",
            main = "#e0ddd1",
            light = "",
        },
        secondary = {
            dark = "#82978c",
            main = "#b8aa94",
            light = "#c3b8a4",
        },
        active = "#8ac090",
        invert = "#272c2a",
        neutral = "#677e72",
        diff = {
            add = "#8ac090",
            delete = "#ba6e5f",
            change = "#99b9e6",
            text = "#899ddc",
        },
    },
}

---@class BlackAtom.Theme.Syntax
M.syntax = {
    default = "#e0ddd1",
    variable = {
        default = "#99b9e6",
        builtin = "#99b9e6",
        parameter = "#e89a61",
        member = "#99b9e6"
    },
    constant = {
        default = "#e89a61",
        builtin = "#e89a61",
    },
    module = {
        default = "#899ddc",
    },
    string = {
        default = "#8ac090",
        documentation = "#85ad9f",
        regexp = "#e89a61",
        escape = "#ba6e5f"
    },
    boolean = {
        default = "#e89a61"
    },
    number = {
        default = "#e89a61"
    },
    type = {
        default = "#85ad9f",
        builtin = "#679980"
    },
    attribute = {
        default = "#85ad9f",
        builtin = "#85ad9f"
    },
    func = {
        default = "#d1a762",
        builtin = "#d1a762",
        method = "#d1a762"
    },
    constructor = {
        default = "#d1a762"
    },
    operator = {
        default = "#c6b3da"
    },
    keyword = {
        default = "#ba6e5f"
    },
    punctuation = {
        default = "#e0ddd1",
        delimiter = "#e0ddd1",
        bracket = "#e0ddd1",
        special = "#85ad9f"
    },
    comment = {
        default = "#677e72",
        documentation = "#82978c"
    },
    markup = {
        default = "#e0ddd1",
        heading = {
            default = "#e89a61",
            h1 = "#e89a61",
            h2 = "#e89a61",
            h3 = "#e89a61",
            h4 = "#e89a61",
            h5 = "#e89a61",
            h6 = "#e89a61",
        },
        strong = "#e0ddd1",
        italic = "#e0ddd1",
        strikethrough = "#e0ddd1",
        underline = "#e0ddd1",
        quote = "#e0ddd1",
        math = "#e0ddd1",
        link = {
            default = "#99b9e6",
            label = "#8ac090",
            url = "#99b9e6"
        },
        code = {
            default = "#8ac090",
            inline = "#8ac090",
            block = "#8ac090",
        },
        list = {
            default = "#e0ddd1",
            checked =  "#8ac090",
            listUnchecked = "#677e72"
        },
    },
    diff = {
        plus = "#272c2a",
        minus = "#ba6e5f",
        delta = "#99b9e6",
        text = ""
    },
    tag = {
        default = "#e0ddd1",
        builtin = "#e89a61",
        custom = "#e89a61",
        attribute = "#e0ddd1",
        delimiter = "#e89a61"
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
