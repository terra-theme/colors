import * as fs from "fs";
import * as path from "path";
import ejs from "ejs";
import * as Theme from "./types/theme";
import terraSpringNight from "./themes/terra/spring-night";

const themes: Theme.Definition[] = [terraSpringNight];
const plattforms = ["lua", "css", "scss"];

const convertTheme = (theme: Theme.Definition, template: string) => {
  const templatePath = path.join(__dirname, `./templates/${template}.ejs`);
  const templateContent = fs.readFileSync(templatePath, "utf-8");
  return ejs.render(templateContent, { theme });
};

themes.forEach((theme) => {
  plattforms.forEach((platform) => {
    const output = convertTheme(theme, platform);
    const outputDir = path.join(__dirname, "../dist", platform);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(
      path.join(outputDir, `${theme.meta.key}.${platform}`),
      output,
    );
    // TODO: run formater for file extension
    console.log(`Generated ${platform} theme for ${theme.meta.key}`);
  });
});
