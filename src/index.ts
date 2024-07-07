import * as fs from "fs";
import * as path from "path";
import ejs from "ejs";
import * as Theme from "./types/theme";
import terraSpringNight from "./themes/terra/spring-night";
import { config } from "./config";

const themes: Theme.Definition[] = [terraSpringNight];
const filetypes = ["lua", "css", "scss"];

const convertTheme = (theme: Theme.Definition, template: string) => {
  const templatsDir = config.dirs.templates;
  const templatePath = path.join(templatsDir, `${template}.ejs`);
  const templateContent = fs.readFileSync(templatePath, "utf-8");
  return ejs.render(templateContent, { theme });
};

themes.forEach((theme) => {
  filetypes.forEach((ft) => {
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
