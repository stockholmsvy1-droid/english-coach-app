import { Lesson } from "../lib/types";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div className="card">
      <div className="badge">{lesson.level}</div>
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      <div className="tag-row">
        <span className="badge">Ord: {lesson.wordIds.length}</span>
        <span className="badge">Fraser: {lesson.phraseIds.length}</span>
        <span className="badge">Dialoger: {lesson.dialogueIds.length}</span>
      </div>
    </div>
  );
}
