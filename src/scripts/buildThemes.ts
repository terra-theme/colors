import * as yaml from "js-yaml";
import * as ejs from "ejs";
import * as fs from "fs-extra";
import * as path from "path";
import * as chokidar from "chokidar";
import chalk from "chalk";

// Static pathes to templates and themes
const templatesDir = path.join(__dirname, "..", "templates");
const themesDir = path.join(__dirname, "..", "themes");
const outputDir = path.join(__dirname, "..", "..", "dist", "themes");
const outputFileExtension = ".yml";

async function buildThemes(
  themeGroups: fs.Dirent[],
  targetLanguages: string[]
) {
  for (const dir of themeGroups.filter((dirent) => dirent.isDirectory())) {
    const themeDirectoryPath = path.join(themesDir, dir.name);
    await processDirectory(themeDirectoryPath, targetLanguages);
  }
}

async function processDirectory(themePath: string, targetLanguages: string[]) {
  // Process each file in the directory
  const themeFiles = await fs.readdir(themePath);

  for (const file of themeFiles) {
    const filePath = path.join(themePath, file);
    const fileStat = await fs.stat(filePath);

    if (fileStat.isDirectory()) {
      // If this file is a directory, process it recursively
      await processDirectory(filePath, targetLanguages);
    } else if (path.extname(file) === outputFileExtension) {
      // If this file is a YAML file, process it
      const yamlData = yaml.load(
        await fs.readFile(filePath, "utf8")
      ) as ejs.Data;

      // Process each target language
      for (const lang of targetLanguages) {
        // Read the template for this language
        const template = await fs.readFile(
          path.join(templatesDir, `${lang}.ejs`),
          "utf8"
        );

        // Render the template with the data from the YAML file
        const output = ejs.render(template, yamlData, {
          debug: false,
        });

        // Save the result in an output file
        const outputFilename = `${path.basename(
          file,
          outputFileExtension
        )}.${lang}`;

        const outputThemeDir = path.join(
          outputDir,
          path.dirname(filePath).replace(themesDir, "")
        );

        await fs.ensureDir(outputThemeDir);

        await fs.writeFile(path.join(outputThemeDir, outputFilename), output);
      }
    }
  }
}

async function main() {
  // Create the output directory if it doesn't exist yet
  await fs.ensureDir(outputDir);

  // Get the list of target languages by reading the template files
  const templateFiles = await fs.readdir(templatesDir);
  const targetLanguages = templateFiles.map((file) =>
    path.basename(file, ".ejs")
  );

  // Process each subdirectory in the themes directory
  const themeGroups = await fs.readdir(themesDir, { withFileTypes: true });

  const buildThemesArgs: Parameters<typeof buildThemes> = [
    themeGroups,
    targetLanguages,
  ];

  // Immediately call the buildThemes function when the script is run
  await buildThemes(...buildThemesArgs).catch(console.error);

  // Check if a 'watch' argument was provided when running the script
  if (process.argv.includes("--watch")) {
    // Watch the themes directory for changes
    const watcher = chokidar.watch(themesDir, { persistent: true });

    watcher.on("change", (filePath) => {
      const relativePath = path.relative(process.cwd(), filePath);
      console.log(
        "🔄",
        `File ${chalk.yellow("updated")}: ${chalk.greenBright(relativePath)}`
      );
      buildThemes(...buildThemesArgs).catch(console.error);
    });

    watcher.on("add", (filePath) => {
      const relativePath = path.relative(process.cwd(), filePath);
      console.log(
        "✅",
        `File ${chalk.green("added")}: ${chalk.greenBright(relativePath)}`
      );
      buildThemes(...buildThemesArgs).catch(console.error);
    });

    watcher.on("unlink", async (filePath) => {
      const relativePath = path.relative(process.cwd(), filePath);
      console.log(
        "❌",
        `File ${chalk.red("deleted")}: ${chalk.greenBright(relativePath)}`
      );

      // Compute the path of the output file that corresponds to the deleted YAML file
      for (const lang of targetLanguages) {
        const outputFilename = `${path.basename(
          filePath,
          outputFileExtension
        )}.${lang}`;

        const outputThemeDir = path.join(
          outputDir,
          path.dirname(filePath).replace(themesDir, "")
        );
        const outputPath = path.join(outputThemeDir, outputFilename);

        // Check if the output file exists
        if (await fs.pathExists(outputPath)) {
          // If it does, delete it
          await fs.unlink(outputPath);
        }
      }
    });
  }
}

main();
