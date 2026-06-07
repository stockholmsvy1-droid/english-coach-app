"use client";

import { useMemo, useState } from "react";
import { baseWordList, placeholderCount } from "../../lib/data";
import { createCard, reviewCard, sortDue } from "../../lib/srs";
import { loadState, saveState } from "../../lib/storage";

export default function SrsPage() {
  const [state, setState] = useState(loadState());
  const [seedInfo, setSeedInfo] = useState<string>("");
  const cards = useMemo(() => {
    const stored = Object.values(state.srsCards);
    if (stored.length === 0) {
      return baseWordList.slice(0, 10).map((word) => createCard(word.id));
    }
    return stored;
  }, [state.srsCards]);

  const wordMap = useMemo(() => {
    const map = new Map<string, typeof baseWordList[number]>();
    baseWordList.forEach((word) => map.set(word.id, word));
    return map;
  }, []);
  const dueCards = sortDue(cards).filter((card) => wordMap.has(card.wordId));
  const currentCard = dueCards[0];
  const currentWord = currentCard ? wordMap.get(currentCard.wordId) : undefined;
  const seedTarget = baseWordList.slice(0, 200);
  const seededCount = seedTarget.filter((word) => state.srsCards[`card_${word.id}`]).length;

  function seedSrs() {
    const now = Date.now();
    const nextCards = { ...state.srsCards };
    let added = 0;

    seedTarget.forEach((word) => {
      const id = `card_${word.id}`;
      if (nextCards[id]) return;
      nextCards[id] = createCard(word.id, now);
      added += 1;
    });

    const next = {
      ...state,
      srsCards: nextCards
    };
    saveState(next);
    setState(next);
    setSeedInfo(`Initierade ${added} nya SRS-kort.`);
  }

  function score(value: 0 | 1 | 2 | 3 | 4 | 5) {
    if (!currentCard || !currentWord) return;
    const updated = reviewCard(currentCard, value);
    const next = {
      ...state,
      srsCards: {
        ...state.srsCards,
        [updated.id]: updated
      }
    };
    saveState(next);
    setState(next);
  }

  if (!currentCard || !currentWord) {
    return <p>Inga kort att repetera just nu.</p>;
  }

  return (
    <div>
      <div className="section-title">
        <h2>Spaced Repetition</h2>
      </div>
      <div className="card">
        <h3>Seed för basord</h3>
        <p>{seededCount}/200 basord har SRS-kort.</p>
        <div className="section-title">
          <button className="button" onClick={seedSrs}>Initiera SRS (200 basord)</button>
        </div>
        {seedInfo && <p>{seedInfo}</p>}
      </div>
      {placeholderCount > 0 && (
        <div className="card">
          <p>Basordslistan är inte komplett ännu. Placeholder‑ord tränas inte i SRS.</p>
        </div>
      )}
      <div className="card">
        <h3>{currentWord.word}</h3>
        <p>{currentWord.swedishExplanation}</p>
        <div className="list">
          {currentWord.exampleSentences.map((sentence) => (
            <span key={sentence}>{sentence}</span>
          ))}
        </div>
        <div className="section-title">
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <button key={value} className="button secondary" onClick={() => score(value as any)}>
              {value}
            </button>
          ))}
        </div>
        <p>0 = glömt, 5 = helt säkert.</p>
      </div>
    </div>
  );
}
