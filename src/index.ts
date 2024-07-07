import * as fs from "fs";
import * as path from "path";
import ejs from "ejs";

import * as Theme from "./types/theme";
import { config } from "./config";
import terraSpringNight from "./themes/terra-spring-night";
import blackAtomEngineering from "./themes/black-atom-engineering";

const themes: Theme.Definition[] = [terraSpringNight, blackAtomEngineering];

/** Dynamically aggregates all available file types in the templates directory. */
const getFileTypes = (templatesDir: string): string[] => {
  const files = fs.readdirSync(templatesDir);
  return files.map((file) => file.split(".")[0]);
};

const convertTheme = (theme: Theme.Definition, template: string) => {
  const templatsDir = config.dirs.templates;
  const templatePath = path.join(templatsDir, `${template}.ejs`);
  const templateContent = fs.readFileSync(templatePath, "utf-8");
  return ejs.render(templateContent, { theme });
};

themes.forEach((theme) => {
  const fts = getFileTypes(config.dirs.templates);

  fts.forEach((ft) => {
    const output = convertTheme(theme, ft);
    const distDir = config.dirs.dist;
    const platformDir = path.join(distDir, ft);

    if (!fs.existsSync(platformDir)) {
      fs.mkdirSync(platformDir, { recursive: true });
    }

    fs.writeFileSync(path.join(platformDir, `${theme.meta.key}.${ft}`), output);
    console.log(`Generated ${ft} theme for ${theme.meta.key}`);
  });
});
