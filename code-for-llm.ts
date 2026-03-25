import * as fs from 'fs';
import * as path from 'path';
import { promises as fsPromises } from 'fs';

// ════════════════════════════════════════════════════════════════════════════
// CONFIGURATION - Adjust these as needed
// ════════════════════════════════════════════════════════════════════════════

const PROJECT_ROOT = process.cwd(); // or path.join(__dirname, "path/to/project")
const INCLUDE_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.yaml', '.yml', '.md']);
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'code_for_llm.txt');

// Optional: Directories to skip
const SKIP_DIRS = new Set(['node_modules', '.git', '.venv', 'dist', 'build', '.next']);

// ════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ════════════════════════════════════════════════════════════════════════════

/**
 * Return true if any part of the path (relative to root) starts with a dot.
 * This skips .venv, .git, .pytest_cache, .whatever, and their contents.
 */
function isHidden(filePath: string, root: string): boolean {
  try {
    const relativePath = path.relative(root, filePath);
    const parts = relativePath.split(path.sep);
    return parts.some(part => part.startsWith('.'));
  } catch (error) {
    // If path is not under root
    return filePath.split(path.sep).some(part => part.startsWith('.'));
  }
}

/**
 * Check if a directory should be skipped
 */
function shouldSkipDir(dirName: string): boolean {
  return SKIP_DIRS.has(dirName);
}

/**
 * Recursively yield source files under root, skipping hidden folders/files.
 */
async function* iterSourceFiles(root: string): AsyncGenerator<string> {
  const entries = await fsPromises.readdir(root, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(root, entry.name);

    // Skip hidden files/directories
    if (isHidden(fullPath, root)) {
      continue;
    }

    // Skip specified directories
    if (entry.isDirectory() && shouldSkipDir(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      // Recursively process subdirectory
      yield* iterSourceFiles(fullPath);
    } else {
      // Check if file extension is in our include list
      const ext = path.extname(entry.name);
      if (INCLUDE_EXTS.has(ext)) {
        yield fullPath;
      }
    }
  }
}

/**
 * Sort file paths alphabetically
 */
function sortPaths(paths: string[]): string[] {
  return paths.sort((a, b) => a.localeCompare(b));
}

// ════════════════════════════════════════════════════════════════════════════
// MAIN FUNCTION
// ════════════════════════════════════════════════════════════════════════════

async function main(): Promise<void> {
  try {
    console.log(`📂 Scanning project: ${PROJECT_ROOT}`);
    console.log(`📝 Output file: ${OUTPUT_FILE}`);
    console.log(`🔍 File extensions to include: ${Array.from(INCLUDE_EXTS).join(', ')}`);
    console.log(`⏭️  Skipping directories: ${Array.from(SKIP_DIRS).join(', ')}\n`);

    // Collect all file paths first (so we can sort them)
    const filePaths: string[] = [];
    for await (const filePath of iterSourceFiles(PROJECT_ROOT)) {
      filePaths.push(filePath);
    }

    const sortedPaths = sortPaths(filePaths);

    console.log(`📦 Found ${sortedPaths.length} files to process\n`);

    // Write to output file
    const outputStream = fs.createWriteStream(OUTPUT_FILE, { encoding: 'utf-8' });

    let processedCount = 0;
    let errorCount = 0;

    for (const filePath of sortedPaths) {
      try {
        const relPath = path.relative(PROJECT_ROOT, filePath);
        
        // Write file header
        outputStream.write(`\n\n===== FILE: ${relPath} =====\n\n`);

        // Read file content
        let content: string;
        try {
          content = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
        } catch (error) {
          // Fallback if there's encoding issues
          content = await fsPromises.readFile(filePath, { 
            encoding: 'utf-8',
            flag: 'r'
          }).catch(() => '[Unable to read file - encoding error]');
        }

        outputStream.write(content);
        processedCount++;

        // Log progress
        if (processedCount % 10 === 0) {
          console.log(`✓ Processed ${processedCount} files...`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error);
        errorCount++;
      }
    }

    // Close the stream
    outputStream.end();

    await new Promise<void>((resolve, reject) => {
      outputStream.end(() => resolve());       // Explicitly call resolve() with no args
      outputStream.on('error', (error) => reject(error));  // Explicitly pass error
    });    

    // Print summary
    console.log(`\n${'='.repeat(60)}`);
    console.log(`✅ Success! Collected code into: ${OUTPUT_FILE}`);
    console.log(`📊 Summary:`);
    console.log(`   - Files processed: ${processedCount}`);
    if (errorCount > 0) {
      console.log(`   - Errors: ${errorCount}`);
    }
    console.log(`${'='.repeat(60)}`);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// ════════════════════════════════════════════════════════════════════════════
// RUN THE SCRIPT
// ════════════════════════════════════════════════════════════════════════════

main();