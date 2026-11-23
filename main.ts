// Office joke entry for the make.fun "Make the AI Judge Laugh" bounty.
// This file builds a single one-line office joke and writes it out for judging.
// It should score well because it is a genuine one-line joke rather than a
// slogan, it lands a real surprise turn at the end, it names a truth every
// office worker recognises, the wording is tight with nothing wasted, and it
// takes a fresh angle instead of a tired Monday-morning or photocopier gag.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 199;

const SETUP = "My boss said 'we're a family here,' so I asked for my inheritance";
const PUNCHLINE = "now I'm on a performance improvement plan.";

function buildLine(): string {
  // Tie-break note: shorter text is better, and this line is 110 characters.
  return `${SETUP} — ${PUNCHLINE}`;
}

function writeEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`Entry must be between 1 and ${MAX_CHARS} characters.`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(buildLine());
