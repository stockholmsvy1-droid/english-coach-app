import { lessonList } from "../../lib/data";
import { LessonCard } from "../../components/LessonCard";

export default function LessonsPage() {
  return (
    <div>
      <div className="section-title">
        <h2>Lektioner</h2>
      </div>
      <p>12 färdiga lektioner: 6 basord + 6 museum guide.</p>
      <div className="grid">
        {lessonList.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
