import { env } from "node:process";

const parseEnv = () => {
    const RSS = Object.entries(env).filter(([key]) => key.startsWith("RSS"));

    RSS.forEach((rss) => console.log(rss.join("=")));
};

parseEnv();
