import { dialogueList } from "../../lib/data";
import { DialogueCard } from "../../components/DialogueCard";

export default function BasvardagPage() {
  const dialogues = dialogueList.filter((dialogue) => dialogue.tags.includes("basvardag")).slice(0, 4);

  return (
    <div>
      <div className="section-title">
        <h2>Basvardag</h2>
      </div>
      <p>Korta dialoger för vardagsengelska. Klicka på ord i framtiden för att se betydelse.</p>
      <div className="card">
        <h3>Lyssningspass</h3>
        <p>Spela upp en kort dialog, markera ord du inte kan, och tryck för att se definition.</p>
        <button className="button secondary">Spela upp (demo)</button>
        <p>Transkript: “Hi! Can I help you?”</p>
      </div>
      <div className="grid">
        {dialogues.map((dialogue) => (
          <DialogueCard key={dialogue.id} dialogue={dialogue} />
        ))}
      </div>
    </div>
  );
}
