import { writeFile } from "node:fs/promises";
import { join } from "path";

const __dirname = import.meta.dirname;

const create = async () => {
    const path = join(__dirname, "files", "fresh.txt");

    try {
        await writeFile(path, "I am fresh and young", {
            encoding: "utf-8",
            flag: "wx",
        });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await create();
