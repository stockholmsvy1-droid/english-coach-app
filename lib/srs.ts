import { SrsCard } from "./types";

export type SrsScore = 0 | 1 | 2 | 3 | 4 | 5;

const DAY = 24 * 60 * 60 * 1000;

export function createCard(wordId: string, now = Date.now()): SrsCard {
  return {
    id: `card_${wordId}`,
    wordId,
    nextReview: now,
    interval: 0,
    ease: 2.5,
    reps: 0,
    lapses: 0
  };
}

export function reviewCard(card: SrsCard, score: SrsScore, now = Date.now()): SrsCard {
  const next = { ...card, lastScore: score };

  if (score < 3) {
    next.reps = 0;
    next.lapses = card.lapses + 1;
    next.interval = 1;
    next.ease = Math.max(1.3, card.ease - 0.2);
    next.nextReview = now + DAY;
    return next;
  }

  const factor = 0.1 - (5 - score) * (0.08 + (5 - score) * 0.02);
  next.ease = Math.max(1.3, card.ease + factor);
  next.reps = card.reps + 1;

  if (next.reps === 1) {
    next.interval = 1;
  } else if (next.reps === 2) {
    next.interval = 6;
  } else {
    next.interval = Math.round(card.interval * next.ease);
  }

  next.nextReview = now + next.interval * DAY;
  return next;
}

export function isDue(card: SrsCard, now = Date.now()): boolean {
  return card.nextReview <= now;
}

export function sortDue(cards: SrsCard[], now = Date.now()): SrsCard[] {
  return [...cards]
    .filter((card) => isDue(card, now))
    .sort((a, b) => a.nextReview - b.nextReview);
}
