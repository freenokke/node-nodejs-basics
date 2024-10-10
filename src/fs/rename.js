import { rename as fsRename } from "node:fs/promises";
import { existsSync } from "node:fs";

import path from "node:path";

const __dirname = import.meta.dirname;

const rename = async () => {
    const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
    const newPath = path.join(__dirname, "files", "properFilename.md");

    if (!existsSync(oldPath) || existsSync(newPath)) {
        throw new Error("FS operation failed");
    }

    fsRename(oldPath, newPath);
};

await rename();
