import { Dialogue } from "../lib/types";

export function DialogueCard({ dialogue }: { dialogue: Dialogue }) {
  return (
    <div className="card">
      <div className="badge">{dialogue.level}</div>
      <h3>{dialogue.title}</h3>
      <div className="list">
        {dialogue.lines.map((line, index) => (
          <div key={`${line.speaker}-${index}`} className="dialogue">
            <strong>{line.speaker}: </strong>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
