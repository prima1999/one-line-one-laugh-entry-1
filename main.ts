import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One self-contained joke, written to /output/entry.txt for the judge.
const JOKE =
  "I asked AI to write my wedding vows. It proposed to my laptop instead.";

function main(): void {
  const text = JOKE.trim();
  if (text.length < 1 || text.length > 140) {
    throw new Error("entry must be 1 to 140 characters");
  }
  const dir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

main();
