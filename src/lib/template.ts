import { Eta } from "@eta";
import { dirname } from "@std/path";
import type { Definition } from "../types/theme.ts";

// Initialize Eta with options
const eta = new Eta({
    views: Deno.cwd(), // Use current working directory as views directory
    cache: true, // Enable caching for better performance
    autoEscape: false, // Don't escape HTML since we're not generating HTML
    varName: "theme", // Use 'theme' as the variable name in templates
});

export async function processTemplate(themeDef: Definition, templatePath: string): Promise<string> {
    try {
        // Read template file
        const template = await Deno.readTextFile(templatePath);

        // Process template with Eta
        return eta.renderString(template, themeDef);
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            throw new Error(`Template file not found: ${templatePath}`);
        }
        throw error;
    }
}

export async function writeOutput(content: string, templatePath: string): Promise<void> {
    // Generate output path by removing .template from the file name
    const outputPath = templatePath.replace(".template.", ".");

    // Ensure the output directory exists
    await Deno.mkdir(dirname(outputPath), { recursive: true });

    // Write the processed content
    await Deno.writeTextFile(outputPath, content);
}
