"use client";

import { useMemo, useState } from "react";
import { wordList } from "../../lib/data";
import { loadState, saveState } from "../../lib/storage";

const questionCount = 8;

export default function TestPage() {
  const [state, setState] = useState(loadState());
  const questions = useMemo(() => wordList.slice(0, questionCount), []);
  const [answers, setAnswers] = useState<Record<string, "known" | "uncertain" | "unknown">>({});

  function submit() {
    const next = {
      ...state,
      wordLevels: {
        ...state.wordLevels,
        ...answers
      }
    };
    saveState(next);
    setState(next);
  }

  return (
    <div>
      <div className="section-title">
        <h2>Placeringstest</h2>
      </div>
      <p>Markera hur säkra orden känns. Fokus är att hitta basord-luckor.</p>
      <div className="list">
        {questions.map((word) => (
          <div key={word.id} className="card">
            <strong>{word.word}</strong> – {word.swedishExplanation}
            <div className="tag-row">
              {["known", "uncertain", "unknown"].map((level) => (
                <button
                  key={level}
                  className="button secondary"
                  onClick={() => setAnswers((prev) => ({ ...prev, [word.id]: level as any }))}
                >
                  {level === "known" ? "Känd" : level === "uncertain" ? "Osäker" : "Okänd"}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="section-title">
        <button className="button" onClick={submit}>Spara testresultat</button>
      </div>
      <p>Aktuellt testläge: {Object.keys(answers).length}/{questionCount} ord markerade.</p>
    </div>
  );
}
