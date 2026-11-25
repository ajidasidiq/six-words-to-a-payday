// Six Words to a Payday — make.fun entry.
// Writes the six-word story from entry.txt to /output/entry.txt,
// byte for byte, so the judged text is exactly the story below.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const story = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
