import { readFile } from "node:fs/promises";

import path from "node:path";

const __dirname = import.meta.dirname;

const read = async () => {
    const filePath = path.join(__dirname, "files", "fileToRead.txt");

    try {
        console.log(await readFile(filePath, { encoding: "utf-8", flag: "r" }));
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await read();
