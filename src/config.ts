import * as path from "path";

const config = {
  templatesDir: path.join(__dirname, "templates"),
  themesDir: path.join(__dirname, "themes"),
  outputDir: path.join(__dirname, "..", "dist", "themes"),
  outputFileExtension: ".yml",
};

export default config;
