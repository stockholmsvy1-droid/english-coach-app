import { WordEntry } from "../lib/types";

export function WordCard({ word }: { word: WordEntry }) {
  return (
    <div className="card">
      <div className="badge">{word.partOfSpeech}</div>
      <h3>{word.word}</h3>
      <p>{word.swedishExplanation}</p>
      <div className="tag-row">
        <span className="badge">IPA {word.ipa}</span>
        <span className="badge">TTS {word.ttsHint}</span>
      </div>
      <div className="list">
        {word.exampleSentences.map((sentence) => (
          <span key={sentence}>{sentence}</span>
        ))}
      </div>
    </div>
  );
}
