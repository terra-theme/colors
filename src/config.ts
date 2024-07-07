import * as path from "path";
import { Config } from "./types/config";

export const config: Config = {
  dirs: {
    templates: path.join(__dirname, "templates"),
    themes: path.join(__dirname, "themes"),
    dist: path.join(__dirname, "..", "dist"),
  },
};
