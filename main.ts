// Builds the one-line office joke for make.fun's "Make the AI Judge Laugh:
// Office Jokes" bounty and writes it to /output/entry.txt: one line, at
// most 199 characters, no trailing newline.
//
// The joke is written to score well on what the house judge compares:
// a genuine one-line joke about office life (not a slogan or observation),
// a real turn at the end (the "family" boss is asked for an inheritance,
// and the ask lands on a performance improvement plan), recognition
// ("we're a family here" is the corporate lie every office worker has
// heard, the PIP is the wince), tight wording, and freshness (the
// inheritance angle, not a Monday morning or photocopier line).

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 199;

const SETUP = "My boss said 'we're a family here,' so I asked for my inheritance";
const PUNCHLINE = "now I'm on a performance improvement plan.";

function buildLine(): string {
  return SETUP + " " + "—" + " " + PUNCHLINE;
}

const line = buildLine();

function writeEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(line);
