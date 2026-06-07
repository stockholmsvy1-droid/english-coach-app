import { createCard, reviewCard, sortDue } from "../lib/srs";

const NOW = new Date("2026-02-04T10:00:00Z").getTime();

it("creates a new card due immediately", () => {
  const card = createCard("word-1", NOW);
  expect(card.nextReview).toBe(NOW);
  expect(card.ease).toBeCloseTo(2.5);
});

it("advances interval on correct answers", () => {
  let card = createCard("word-1", NOW);
  card = reviewCard(card, 4, NOW);
  expect(card.interval).toBe(1);
  card = reviewCard(card, 4, NOW + 24 * 60 * 60 * 1000);
  expect(card.interval).toBe(6);
});

it("resets on failure", () => {
  let card = createCard("word-1", NOW);
  card = reviewCard(card, 1, NOW);
  expect(card.lapses).toBe(1);
  expect(card.interval).toBe(1);
});

it("sorts due cards", () => {
  const cards = [
    createCard("a", NOW + 1000),
    createCard("b", NOW - 1000)
  ];
  const due = sortDue(cards, NOW);
  expect(due.length).toBe(1);
  expect(due[0].wordId).toBe("b");
});
