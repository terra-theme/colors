import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import ejs from "ejs";

import { config } from "./config";
import * as Theme from "./types/theme";

/** Dynamically imports all available themes.*/
const getThemes = async (): Promise<Theme.Definition[]> => {
  const themes: Theme.Definition[] = [];
  const themesDir = config.dirs.themes;

  const files = fs.readdirSync(themesDir);

  for (const file of files) {
    const theme = await import(path.join(themesDir, file));
    themes.push(theme.default);
  }

  return themes;
};

/** Dynamically aggregates all available file types in the templates directory.*/
const getFileTypes = (templatesDir: string): string[] => {
  const files = fs.readdirSync(templatesDir);
  return files.map(file => file.split(".")[0]);
};

const convertTheme = (theme: Theme.Definition, template: string) => {
  const templatsDir = config.dirs.templates;
  const templatePath = path.join(templatsDir, `${template}.ejs`);
  const templateContent = fs.readFileSync(templatePath, "utf-8");
  return ejs.render(templateContent, { theme });
};

const main = async () => {
  const themes = await getThemes();

  themes.forEach(theme => {
    const fts = getFileTypes(config.dirs.templates);

    fts.forEach(ft => {
      const output = convertTheme(theme, ft);
      const distDir = config.dirs.dist;
      const platformDir = path.join(distDir, ft);

      if (!fs.existsSync(platformDir)) {
        fs.mkdirSync(platformDir, { recursive: true });
      }

      fs.writeFileSync(path.join(platformDir, `${theme.meta.key}.${ft}`), output);
      console.log(`${chalk.green("Generated:: ")} ${theme.meta.key}.${chalk.gray(ft)}`);
    });
  });
};

main();
