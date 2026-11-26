// Six Words to a Payday — make.fun entry.
// Writes the six-word story from entry.txt to /output/entry.txt,
// byte for byte, so the judged text is exactly the story below.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const story = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");

// Gate self-check, mirroring the sealed scorer: exactly six words, one
// line, no control characters, finished sentence.
const text = story.trim();
if (!text) throw new Error("story must not be blank");
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("story must be a single line");
}
const words = text.split(/\s+/);
if (words.length !== 6) {
  throw new Error(`story must be exactly six words, got ${words.length}`);
}
for (const ch of text) {
  if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
    throw new Error("story must not contain control characters");
  }
}
if (!/[.!?]$/.test(text)) {
  throw new Error("story must end with terminal punctuation");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
