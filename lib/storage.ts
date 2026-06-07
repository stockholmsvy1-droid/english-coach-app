import { SrsCard, UserStats, WordLevel } from "./types";

const STORAGE_KEY = "english-coach-storage-v1";

export type StorageState = {
  wordLevels: Record<string, WordLevel>;
  srsCards: Record<string, SrsCard>;
  stats: UserStats;
  interests: string[];
};

const defaultState: StorageState = {
  wordLevels: {},
  srsCards: {},
  interests: ["basord"],
  stats: {
    known: 0,
    uncertain: 0,
    unknown: 0,
    streak: 0,
    listeningMinutes: 0,
    sentencesProduced: 0
  }
};

export function loadState(): StorageState {
  if (typeof window === "undefined") return defaultState;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultState;
  try {
    return { ...defaultState, ...JSON.parse(raw) } as StorageState;
  } catch {
    return defaultState;
  }
}

export function saveState(state: StorageState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
