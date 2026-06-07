import words from "../data/words.json";
import museumPhrases from "../data/museum_phrases.json";
import dialogues from "../data/dialogues.json";
import lessons from "../data/lessons.json";
import { WordEntry, PhraseEntry, Dialogue, Lesson } from "./types";

export const wordList = words as WordEntry[];
export const museumPhraseList = museumPhrases as PhraseEntry[];
export const dialogueList = dialogues as Dialogue[];
export const lessonList = lessons as Lesson[];

export const realWordList = wordList.filter((word) => !word.tags.includes("placeholder"));
export const baseWordList = wordList.filter(
  (word) => word.tags.includes("base") && !word.tags.includes("placeholder")
);
export const placeholderCount = wordList.filter((word) => word.tags.includes("placeholder")).length;
export const baseWordCount = baseWordList.length;
