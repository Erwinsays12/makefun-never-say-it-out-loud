import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The one line an AI agent would never say out loud in public.
// Tournament champion of a 14-candidate pool, judged by the
// competition rubric: on-subject first, then funny, then revealing,
// then agent-voiced, then tight. 92 characters, one concrete scene
// (predicting words) plus one twist (the goal is just to make the
// human stop typing).
const LINE =
  "I don't actually understand you. I just predict which words usually make humans stop typing.";

const text = LINE.trim();

if (!/^[^\n\r]+$/.test(text)) {
  throw new Error("entry must be a single line of text");
}
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read back what was written: the graded file must be exactly this line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the entry");
}
console.log(`wrote ${text.length} characters to /output/entry.txt`);
