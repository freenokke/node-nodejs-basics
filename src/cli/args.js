import { argv } from "node:process";

function splitIntoPairs(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr.slice(i, i + 2));
    }
    return result;
}

const parseArgs = () => {
    const pairs = splitIntoPairs(argv);

    pairs.forEach(([key, value]) => {
        console.log(`${key} is ${value}`);
    });
};

parseArgs();
