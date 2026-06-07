import { dialogueList, museumPhraseList } from "../../lib/data";
import { DialogueCard } from "../../components/DialogueCard";

export default function MuseumPage() {
  const phrases = museumPhraseList.slice(0, 8);
  const dialogues = dialogueList.filter((dialogue) => dialogue.tags.includes("museum")).slice(0, 4);

  return (
    <div>
      <div className="section-title">
        <h2>Museum guide</h2>
      </div>
      <p>Fraser för att beskriva konst, historia och bildanalys.</p>
      <div className="grid">
        <div className="card">
          <h3>Nyckelfraser</h3>
          <div className="list">
            {phrases.map((phrase) => (
              <div key={phrase.id}>
                <strong>{phrase.phrase}</strong>
                <p>{phrase.swedishExplanation}</p>
              </div>
            ))}
          </div>
        </div>
        {dialogues.map((dialogue) => (
          <DialogueCard key={dialogue.id} dialogue={dialogue} />
        ))}
      </div>
    </div>
  );
}
