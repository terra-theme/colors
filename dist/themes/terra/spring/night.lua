local M = {}

---@type TerraColors.Debug
M.debug = {
    neon_pink = "#FF69B4",
    electric_lime = "#CCFF00",
    vivid_cyan = "#00FFFF",
}

---@type TerraColors.Primaries
M.primaries = {
    "#18251f",
    "#1c2a23",
    "#21322a",
    "#293e34",
    "#334d3f",
    "#486c59",
    "#5c8972",
    "#75a48c",
    "#d3cec5",
    "#dfdbd3",
    "#e9e6e1",
    "#f4f3f1",
}

---@type TerraColors.Palette
M.palette = {
    black = "#293e34",
    gray = "#334d3f",
    dark_red = "#d6582e",
    red = "#da714d",
    dark_green = "#639f5f",
    green = "#83C57D",
    dark_yellow = "#ffa552",
    yellow = "#f6cb62",
    dark_blue = "#8fb7ef",
    blue = "#78cfec",
    dark_magenta = "#bb8eb8",
    magenta = "#c5aadf",
    dark_cyan = "#4ebb7b",
    cyan = "#75d79d",
    light_gray = "#d3cec5",
    white = "#f4f3f1",
}

---@type TerraColors.Semantics
M.semantics = {
    bg = {
        primary = {
            dark = "#18251f",
            main = "#1c2a23",
            light = "#21322a",
        },
        secondary = {
            dark = "#293e34",
            main = "#334d3f",
            light = "#486c59",
        },
        active = "#334d3f",
        match = {
            active = "#5A5C69",
            passive = "#32393C",
        },
        diff = {
            add = "#83C57D",
            delete = "#da714d",
            change = "#78cfec",
            text = "#8fb7ef",
        },
    },
    fg = {
        primary = {
            dark = "#e9e6e1",
            main = "#f4f3f1",
            light = "#f4f3f1",
        },
        secondary = {
            dark = "#75a48c",
            main = "#d3cec5",
            light = "#dfdbd3",
        },
        active = "#83C57D",
        invert = "#1c2a23",
        neutral = "#334d3f",
        diff = {
            add = "#83C57D",
            delete = "#da714d",
            change = "#78cfec",
            text = "#8fb7ef",
        },
    },
}

---@return TerraColors
M.colors = function()
    return {
        none = "none",
        debug = M.debug,
        primaries = M.primaries,
        palette = M.palette,
        semantics = M.semantics,
    }
end

