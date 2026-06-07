import { WordEntry, WordLevel, Lesson, PhraseEntry, Dialogue } from "./types";

export type TrainingItem = {
  word: WordEntry;
  level: WordLevel;
};

export function pickWeakWords(words: WordEntry[], levels: Record<string, WordLevel>, count = 8): TrainingItem[] {
  const scored = words.map((word) => {
    const level = levels[word.id] ?? "unknown";
    const score = level === "unknown" ? 0 : level === "uncertain" ? 1 : 2;
    return { word, level, score };
  });

  return scored
    .sort((a, b) => a.score - b.score)
    .slice(0, count)
    .map(({ word, level }) => ({ word, level }));
}

export function filterLessons(lessons: Lesson[], focus: "basord" | "museum", level: "easy" | "medium" | "hard") {
  return lessons.filter((lesson) => lesson.focus === focus && lesson.level === level);
}

export function pickDialogues(dialogues: Dialogue[], tags: string[], count = 2): Dialogue[] {
  const filtered = dialogues.filter((dialogue) => tags.some((tag) => dialogue.tags.includes(tag)));
  return filtered.slice(0, count);
}

export function pickPhrases(phrases: PhraseEntry[], tags: string[], count = 6): PhraseEntry[] {
  const filtered = phrases.filter((phrase) => tags.some((tag) => phrase.tags.includes(tag)));
  return filtered.slice(0, count);
}
