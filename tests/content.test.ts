import words from "../data/words.json";
import phrases from "../data/museum_phrases.json";
import dialogues from "../data/dialogues.json";
import lessons from "../data/lessons.json";

it("has required content counts", () => {
  expect(words.length).toBeGreaterThanOrEqual(1500);
  expect(phrases.length).toBeGreaterThanOrEqual(300);
  expect(dialogues.length).toBeGreaterThanOrEqual(80);
  expect(lessons.length).toBeGreaterThanOrEqual(12);
});

it("has required fields per word", () => {
  const sample = words[0];
  expect(sample.word).toBeTruthy();
  expect(sample.meanings).toBeTruthy();
  expect(sample.swedishExplanation).toBeTruthy();
  expect(sample.exampleSentences).toBeTruthy();
  expect(sample.commonMistakesForSwedes).toBeTruthy();
  expect(sample.synonyms).toBeTruthy();
  expect(sample.antonyms).toBeTruthy();
  expect(sample.ipa).toBeTruthy();
  expect(sample.ttsHint).toBeTruthy();
});
