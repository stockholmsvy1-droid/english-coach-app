import { WordEntry, PhraseEntry, Dialogue } from "./types";

export type ImportPayload = {
  words: WordEntry[];
  phrases: PhraseEntry[];
  dialogues: Dialogue[];
};

export function validateImport(payload: ImportPayload) {
  const issues: string[] = [];
  if (!payload.words?.length) issues.push("Saknar ordlista");
  if (!payload.phrases?.length) issues.push("Saknar fraser");
  if (!payload.dialogues?.length) issues.push("Saknar dialoger");
  return issues;
}
