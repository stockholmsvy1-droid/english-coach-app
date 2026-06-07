"use client";

import { useMemo, useState } from "react";
import { baseWordCount, baseWordList, placeholderCount } from "../lib/data";
import { loadState, saveState } from "../lib/storage";
import { pickWeakWords } from "../lib/selection";
import { WordCard } from "./WordCard";
import { createCard } from "../lib/srs";

export function Dashboard() {
  const [state, setState] = useState(loadState());

  const weakWords = useMemo(() => pickWeakWords(baseWordList, state.wordLevels, 6), [state.wordLevels]);
  const knownCount = Object.values(state.wordLevels).filter((level) => level === "known").length;
  const uncertainCount = Object.values(state.wordLevels).filter((level) => level === "uncertain").length;
  const unknownCount = baseWordCount - knownCount - uncertainCount;
  const [seedInfo, setSeedInfo] = useState<string>("");

  function markWord(id: string, level: "known" | "uncertain" | "unknown") {
    const next = {
      ...state,
      wordLevels: {
        ...state.wordLevels,
        [id]: level
      }
    };
    saveState(next);
    setState(next);
  }

  function seedSrs() {
    const now = Date.now();
    const target = baseWordList.slice(0, 200);
    const nextCards = { ...state.srsCards };
    let added = 0;

    target.forEach((word) => {
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
    setSeedInfo(`Initierade ${added} SRS-kort.`);
  }

  return (
    <div className="grid">
      {placeholderCount > 0 && (
        <div className="card">
          <h3>Varning</h3>
          <p>Basordslistan är inte komplett ännu. Placeholder‑ord är exkluderade från träning.</p>
        </div>
      )}
      <div className="card">
        <h3>Dagens mål</h3>
        <div className="stat-row">
          <div className="stat">
            <strong>Nya ord</strong>
            <p>12</p>
          </div>
          <div className="stat">
            <strong>Retention</strong>
            <p>82%</p>
          </div>
          <div className="stat">
            <strong>Lyssning</strong>
            <p>{state.stats.listeningMinutes} min</p>
          </div>
          <div className="stat">
            <strong>Meningar</strong>
            <p>{state.stats.sentencesProduced}</p>
          </div>
        </div>
      </div>
      <div className="card">
        <h3>Basord-progress</h3>
        <div className="stat-row">
          <div className="stat">
            <strong>Kända</strong>
            <p>{knownCount}</p>
          </div>
          <div className="stat">
            <strong>Osäkra</strong>
            <p>{uncertainCount}</p>
          </div>
          <div className="stat">
            <strong>Okända</strong>
            <p>{unknownCount}</p>
          </div>
        </div>
        <p>Basordslistan innehåller {baseWordCount} ord.</p>
      </div>
      <div className="card">
        <h3>Svaga ord just nu</h3>
        <div className="list">
          {weakWords.map(({ word }) => (
            <div key={word.id}>
              <strong>{word.word}</strong> – {word.swedishExplanation}
              <div className="tag-row">
                <button className="button secondary" onClick={() => markWord(word.id, "known")}>Känd</button>
                <button className="button secondary" onClick={() => markWord(word.id, "uncertain")}>Osäker</button>
                <button className="button secondary" onClick={() => markWord(word.id, "unknown")}>Okänd</button>
              </div>
            </div>
          ))}
        </div>
        <div className="section-title">
          <button className="button" onClick={seedSrs}>Initiera SRS (200 basord)</button>
        </div>
        {seedInfo && <p>{seedInfo}</p>}
      </div>
      {weakWords.slice(0, 2).map(({ word }) => (
        <WordCard key={word.id} word={word} />
      ))}
    </div>
  );
}
