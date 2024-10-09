import { unlink } from "node:fs/promises";
import { existsSync } from "node:fs";

import path from "node:path";

const __dirname = import.meta.dirname;

const remove = async () => {
    const filePath = path.join(__dirname, "files", "fileToRemove.txt");

    try {
        await unlink(filePath);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await remove();
