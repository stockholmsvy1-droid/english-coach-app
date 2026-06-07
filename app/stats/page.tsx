"use client";

import { useState } from "react";
import { loadState } from "../../lib/storage";

export default function StatsPage() {
  const [state] = useState(loadState());

  return (
    <div>
      <div className="section-title">
        <h2>Statistik</h2>
      </div>
      <div className="grid">
        <div className="card">
          <h3>Basord-läge</h3>
          <p>Kända ord: {Object.values(state.wordLevels).filter((level) => level === "known").length}</p>
          <p>Osäkra ord: {Object.values(state.wordLevels).filter((level) => level === "uncertain").length}</p>
          <p>Okända ord: {Object.values(state.wordLevels).filter((level) => level === "unknown").length}</p>
        </div>
        <div className="card">
          <h3>Aktiv träning</h3>
          <p>Lyssningsminuter: {state.stats.listeningMinutes}</p>
          <p>Producerade meningar: {state.stats.sentencesProduced}</p>
        </div>
        <div className="card">
          <h3>Streak</h3>
          <p>{state.stats.streak} dagar i rad</p>
        </div>
      </div>
    </div>
  );
}
