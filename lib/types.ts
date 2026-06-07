export type WordLevel = "known" | "uncertain" | "unknown";

export type WordEntry = {
  id: string;
  word: string;
  partOfSpeech: "noun" | "verb" | "adj" | "adv" | "prep" | "pron" | "det" | "conj" | "phrase" | "other";
  meanings: string[];
  swedishExplanation: string;
  exampleSentences: string[];
  commonMistakesForSwedes: string[];
  synonyms: string[];
  antonyms: string[];
  ipa: string;
  ttsHint: string;
  tags: string[];
};

export type PhraseEntry = {
  id: string;
  phrase: string;
  swedishExplanation: string;
  level: "easy" | "medium" | "hard";
  tags: string[];
};

export type DialogueLine = {
  speaker: string;
  text: string;
};

export type Dialogue = {
  id: string;
  title: string;
  level: "easy" | "medium" | "hard";
  tags: string[];
  lines: DialogueLine[];
};

export type Lesson = {
  id: string;
  title: string;
  focus: "basord" | "museum";
  level: "easy" | "medium" | "hard";
  description: string;
  wordIds: string[];
  phraseIds: string[];
  dialogueIds: string[];
};

export type SrsCard = {
  id: string;
  wordId: string;
  nextReview: number;
  interval: number;
  ease: number;
  reps: number;
  lapses: number;
  lastScore?: number;
};

export type UserStats = {
  known: number;
  uncertain: number;
  unknown: number;
  streak: number;
  lastSessionDate?: string;
  listeningMinutes: number;
  sentencesProduced: number;
};
