"use client";

import { useMemo, useState } from "react";
import { baseWordList, placeholderCount } from "../../lib/data";
import { loadState, saveState } from "../../lib/storage";

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getDistractors(currentId: string, partOfSpeech: string, pool: typeof baseWordList) {
  const samePos = pool.filter((word) => word.partOfSpeech === partOfSpeech && word.id !== currentId);
  const fallback = pool.filter((word) => word.id !== currentId);
  const source = samePos.length >= 3 ? samePos : fallback;
  return shuffle(source).slice(0, 3);
}

export default function TrainPage() {
  const [state, setState] = useState(loadState());
  const [currentIndex, setCurrentIndex] = useState(0);
  const sessionWords = useMemo(() => shuffle(baseWordList).slice(0, 6), []);
  const current = sessionWords[currentIndex];
  const options = useMemo(() => {
    const others = getDistractors(current.id, current.partOfSpeech, baseWordList);
    return shuffle([current, ...others]);
  }, [current]);

  function mark(level: "known" | "uncertain" | "unknown") {
    const next = {
      ...state,
      wordLevels: {
        ...state.wordLevels,
        [current.id]: level
      }
    };
    saveState(next);
    setState(next);
    setCurrentIndex((prev) => Math.min(prev + 1, sessionWords.length - 1));
  }

  if (!current) return <p>Ingen träning just nu.</p>;

  return (
    <div>
      <div className="section-title">
        <h2>Snabbträning</h2>
      </div>
      {placeholderCount > 0 && (
        <div className="card">
          <p>Basordslistan är inte komplett ännu. Placeholder‑ord tränas inte i MVP.</p>
        </div>
      )}
      <div className="card">
        <p>Välj rätt betydelse för ordet:</p>
        <h3>{current.word}</h3>
        <div className="list">
          {options.map((option) => (
            <button key={option.id} className="button secondary" onClick={() => mark(option.id === current.id ? "known" : "uncertain")}
            >
              {option.swedishExplanation}
            </button>
          ))}
        </div>
        <div className="section-title">
          <button className="button secondary" onClick={() => mark("unknown")}>Jag vet inte</button>
        </div>
      </div>
      <div className="card">
        <p>Fill in the blank:</p>
        <p>
          I <strong>____</strong> after work.
        </p>
        <input className="input" placeholder="Skriv ett verb" />
        <p>Exempel: {current.word}</p>
      </div>
      <div className="card">
        <p>Aktiv produktion (skriv eller tala):</p>
        <textarea className="input" rows={4} placeholder="Skriv en kort mening om konst eller vardag." />
        <div className="section-title">
          <button className="button secondary">Ge feedback</button>
        </div>
        <p>Feedback: håll det kort, använd ett verb i presens och en preposition.</p>
      </div>
    </div>
  );
}
