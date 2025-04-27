// list.js - implement function that prints array of all filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import { readdir } from "node:fs/promises";

import path from "node:path";

const __dirname = import.meta.dirname;

const list = async () => {
    const folderPath = path.join(__dirname, "files");

    try {
        console.log(await readdir(folderPath));
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await list();
