import fs from "fs";
import path from "path";

const outDir = path.resolve("data");
fs.mkdirSync(outDir, { recursive: true });

const seedWords = [
  { word: "I", pos: "pron", sw: "jag" },
  { word: "you", pos: "pron", sw: "du/ni" },
  { word: "he", pos: "pron", sw: "han" },
  { word: "she", pos: "pron", sw: "hon" },
  { word: "we", pos: "pron", sw: "vi" },
  { word: "they", pos: "pron", sw: "de" },
  { word: "me", pos: "pron", sw: "mig" },
  { word: "him", pos: "pron", sw: "honom" },
  { word: "her", pos: "pron", sw: "henne/hennes" },
  { word: "us", pos: "pron", sw: "oss" },
  { word: "them", pos: "pron", sw: "dem" },
  { word: "this", pos: "det", sw: "det här" },
  { word: "that", pos: "det", sw: "det där" },
  { word: "these", pos: "det", sw: "de här" },
  { word: "those", pos: "det", sw: "de där" },
  { word: "a", pos: "det", sw: "en/ett" },
  { word: "an", pos: "det", sw: "en/ett" },
  { word: "the", pos: "det", sw: "den/det" },
  { word: "and", pos: "conj", sw: "och" },
  { word: "but", pos: "conj", sw: "men" },
  { word: "or", pos: "conj", sw: "eller" },
  { word: "because", pos: "conj", sw: "för att" },
  { word: "if", pos: "conj", sw: "om" },
  { word: "so", pos: "conj", sw: "så" },
  { word: "to", pos: "prep", sw: "till" },
  { word: "from", pos: "prep", sw: "från" },
  { word: "in", pos: "prep", sw: "i" },
  { word: "on", pos: "prep", sw: "på" },
  { word: "at", pos: "prep", sw: "vid" },
  { word: "for", pos: "prep", sw: "för" },
  { word: "with", pos: "prep", sw: "med" },
  { word: "without", pos: "prep", sw: "utan" },
  { word: "about", pos: "prep", sw: "om" },
  { word: "before", pos: "prep", sw: "före" },
  { word: "after", pos: "prep", sw: "efter" },
  { word: "during", pos: "prep", sw: "under" },
  { word: "between", pos: "prep", sw: "mellan" },
  { word: "under", pos: "prep", sw: "under" },
  { word: "over", pos: "prep", sw: "över" },
  { word: "up", pos: "prep", sw: "upp" },
  { word: "down", pos: "prep", sw: "ner" },
  { word: "here", pos: "adv", sw: "här" },
  { word: "there", pos: "adv", sw: "där" },
  { word: "now", pos: "adv", sw: "nu" },
  { word: "then", pos: "adv", sw: "sedan" },
  { word: "today", pos: "adv", sw: "idag" },
  { word: "tomorrow", pos: "adv", sw: "imorgon" },
  { word: "yesterday", pos: "adv", sw: "igår" },
  { word: "always", pos: "adv", sw: "alltid" },
  { word: "often", pos: "adv", sw: "ofta" },
  { word: "sometimes", pos: "adv", sw: "ibland" },
  { word: "never", pos: "adv", sw: "aldrig" },
  { word: "very", pos: "adv", sw: "mycket" },
  { word: "too", pos: "adv", sw: "för" },
  { word: "really", pos: "adv", sw: "verkligen" },
  { word: "just", pos: "adv", sw: "precis" },
  { word: "only", pos: "adv", sw: "bara" },
  { word: "maybe", pos: "adv", sw: "kanske" },
  { word: "yes", pos: "other", sw: "ja" },
  { word: "no", pos: "other", sw: "nej" },
  { word: "please", pos: "other", sw: "snälla" },
  { word: "thanks", pos: "other", sw: "tack" },
  { word: "hello", pos: "other", sw: "hej" },
  { word: "hi", pos: "other", sw: "hej" },
  { word: "goodbye", pos: "other", sw: "hej då" },
  { word: "sorry", pos: "other", sw: "förlåt" },
  { word: "excuse", pos: "verb", sw: "ursäkta" },
  { word: "be", pos: "verb", sw: "vara", irregular: { past: "was", pastPlural: "were", ing: "being", third: "is" } },
  { word: "have", pos: "verb", sw: "ha", irregular: { past: "had", ing: "having", third: "has" } },
  { word: "do", pos: "verb", sw: "göra", irregular: { past: "did", ing: "doing", third: "does" } },
  { word: "go", pos: "verb", sw: "gå", irregular: { past: "went", ing: "going", third: "goes" } },
  { word: "get", pos: "verb", sw: "få", irregular: { past: "got", ing: "getting", third: "gets" } },
  { word: "make", pos: "verb", sw: "göra/skapa", irregular: { past: "made", ing: "making", third: "makes" } },
  { word: "take", pos: "verb", sw: "ta", irregular: { past: "took", ing: "taking", third: "takes" } },
  { word: "give", pos: "verb", sw: "ge", irregular: { past: "gave", ing: "giving", third: "gives" } },
  { word: "see", pos: "verb", sw: "se", irregular: { past: "saw", ing: "seeing", third: "sees" } },
  { word: "look", pos: "verb", sw: "titta" },
  { word: "watch", pos: "verb", sw: "titta på" },
  { word: "hear", pos: "verb", sw: "höra", irregular: { past: "heard", ing: "hearing", third: "hears" } },
  { word: "listen", pos: "verb", sw: "lyssna" },
  { word: "say", pos: "verb", sw: "säga", irregular: { past: "said", ing: "saying", third: "says" } },
  { word: "tell", pos: "verb", sw: "berätta", irregular: { past: "told", ing: "telling", third: "tells" } },
  { word: "ask", pos: "verb", sw: "fråga" },
  { word: "answer", pos: "verb", sw: "svara" },
  { word: "think", pos: "verb", sw: "tänka", irregular: { past: "thought", ing: "thinking", third: "thinks" } },
  { word: "know", pos: "verb", sw: "veta", irregular: { past: "knew", ing: "knowing", third: "knows" } },
  { word: "understand", pos: "verb", sw: "förstå", irregular: { past: "understood", ing: "understanding", third: "understands" } },
  { word: "learn", pos: "verb", sw: "lära", irregular: { past: "learned", ing: "learning", third: "learns" } },
  { word: "study", pos: "verb", sw: "studera", irregular: { past: "studied", ing: "studying", third: "studies" } },
  { word: "teach", pos: "verb", sw: "lära ut", irregular: { past: "taught", ing: "teaching", third: "teaches" } },
  { word: "work", pos: "verb", sw: "arbeta" },
  { word: "live", pos: "verb", sw: "bo" },
  { word: "want", pos: "verb", sw: "vilja" },
  { word: "need", pos: "verb", sw: "behöva" },
  { word: "like", pos: "verb", sw: "tycka om" },
  { word: "love", pos: "verb", sw: "älska" },
  { word: "help", pos: "verb", sw: "hjälpa" },
  { word: "use", pos: "verb", sw: "använda" },
  { word: "open", pos: "verb", sw: "öppna" },
  { word: "close", pos: "verb", sw: "stänga" },
  { word: "start", pos: "verb", sw: "börja" },
  { word: "finish", pos: "verb", sw: "sluta" },
  { word: "stop", pos: "verb", sw: "stanna/sluta" },
  { word: "move", pos: "verb", sw: "flytta/röra" },
  { word: "walk", pos: "verb", sw: "gå" },
  { word: "run", pos: "verb", sw: "springa", irregular: { past: "ran", ing: "running", third: "runs" } },
  { word: "sit", pos: "verb", sw: "sitta", irregular: { past: "sat", ing: "sitting", third: "sits" } },
  { word: "stand", pos: "verb", sw: "stå", irregular: { past: "stood", ing: "standing", third: "stands" } },
  { word: "eat", pos: "verb", sw: "äta", irregular: { past: "ate", ing: "eating", third: "eats" } },
  { word: "drink", pos: "verb", sw: "dricka", irregular: { past: "drank", ing: "drinking", third: "drinks" } },
  { word: "sleep", pos: "verb", sw: "sova", irregular: { past: "slept", ing: "sleeping", third: "sleeps" } },
  { word: "wake", pos: "verb", sw: "vakna", irregular: { past: "woke", ing: "waking", third: "wakes" } },
  { word: "read", pos: "verb", sw: "läsa", irregular: { past: "read", ing: "reading", third: "reads" } },
  { word: "write", pos: "verb", sw: "skriva", irregular: { past: "wrote", ing: "writing", third: "writes" } },
  { word: "draw", pos: "verb", sw: "rita", irregular: { past: "drew", ing: "drawing", third: "draws" } },
  { word: "paint", pos: "verb", sw: "måla" },
  { word: "build", pos: "verb", sw: "bygga", irregular: { past: "built", ing: "building", third: "builds" } },
  { word: "break", pos: "verb", sw: "ha sönder", irregular: { past: "broke", ing: "breaking", third: "breaks" } },
  { word: "fix", pos: "verb", sw: "fixa" },
  { word: "try", pos: "verb", sw: "försöka", irregular: { past: "tried", ing: "trying", third: "tries" } },
  { word: "choose", pos: "verb", sw: "välja", irregular: { past: "chose", ing: "choosing", third: "chooses" } },
  { word: "pay", pos: "verb", sw: "betala", irregular: { past: "paid", ing: "paying", third: "pays" } },
  { word: "buy", pos: "verb", sw: "köpa", irregular: { past: "bought", ing: "buying", third: "buys" } },
  { word: "sell", pos: "verb", sw: "sälja", irregular: { past: "sold", ing: "selling", third: "sells" } },
  { word: "bring", pos: "verb", sw: "ta med", irregular: { past: "brought", ing: "bringing", third: "brings" } },
  { word: "send", pos: "verb", sw: "skicka", irregular: { past: "sent", ing: "sending", third: "sends" } },
  { word: "call", pos: "verb", sw: "ringa" },
  { word: "meet", pos: "verb", sw: "träffa", irregular: { past: "met", ing: "meeting", third: "meets" } },
  { word: "wait", pos: "verb", sw: "vänta" },
  { word: "stay", pos: "verb", sw: "stanna" },
  { word: "arrive", pos: "verb", sw: "ankomma" },
  { word: "leave", pos: "verb", sw: "lämna", irregular: { past: "left", ing: "leaving", third: "leaves" } },
  { word: "travel", pos: "verb", sw: "resa" },
  { word: "visit", pos: "verb", sw: "besöka" },
  { word: "plan", pos: "verb", sw: "planera" },
  { word: "decide", pos: "verb", sw: "bestämma" },
  { word: "agree", pos: "verb", sw: "hålla med" },
  { word: "disagree", pos: "verb", sw: "inte hålla med" },
  { word: "remember", pos: "verb", sw: "komma ihåg" },
  { word: "forget", pos: "verb", sw: "glömma", irregular: { past: "forgot", ing: "forgetting", third: "forgets" } },
  { word: "feel", pos: "verb", sw: "känna", irregular: { past: "felt", ing: "feeling", third: "feels" } },
  { word: "smile", pos: "verb", sw: "le" },
  { word: "laugh", pos: "verb", sw: "skratta" },
  { word: "cry", pos: "verb", sw: "gråta", irregular: { past: "cried", ing: "crying", third: "cries" } },
  { word: "see", pos: "verb", sw: "se" },
  { word: "hear", pos: "verb", sw: "höra" },
  { word: "taste", pos: "verb", sw: "smaka" },
  { word: "touch", pos: "verb", sw: "röra" },
  { word: "smell", pos: "verb", sw: "lukta" },
  { word: "good", pos: "adj", sw: "bra" },
  { word: "bad", pos: "adj", sw: "dålig" },
  { word: "big", pos: "adj", sw: "stor" },
  { word: "small", pos: "adj", sw: "liten" },
  { word: "long", pos: "adj", sw: "lång" },
  { word: "short", pos: "adj", sw: "kort" },
  { word: "old", pos: "adj", sw: "gammal" },
  { word: "new", pos: "adj", sw: "ny" },
  { word: "young", pos: "adj", sw: "ung" },
  { word: "early", pos: "adj", sw: "tidig" },
  { word: "late", pos: "adj", sw: "sen" },
  { word: "right", pos: "adj", sw: "rätt" },
  { word: "wrong", pos: "adj", sw: "fel" },
  { word: "easy", pos: "adj", sw: "lätt" },
  { word: "hard", pos: "adj", sw: "svår" },
  { word: "strong", pos: "adj", sw: "stark" },
  { word: "weak", pos: "adj", sw: "svag" },
  { word: "clean", pos: "adj", sw: "ren" },
  { word: "dirty", pos: "adj", sw: "smutsig" },
  { word: "hot", pos: "adj", sw: "varm" },
  { word: "cold", pos: "adj", sw: "kall" },
  { word: "warm", pos: "adj", sw: "ljummen" },
  { word: "fast", pos: "adj", sw: "snabb" },
  { word: "slow", pos: "adj", sw: "långsam" },
  { word: "happy", pos: "adj", sw: "glad" },
  { word: "sad", pos: "adj", sw: "ledsen" },
  { word: "angry", pos: "adj", sw: "arg" },
  { word: "tired", pos: "adj", sw: "trött" },
  { word: "hungry", pos: "adj", sw: "hungrig" },
  { word: "thirsty", pos: "adj", sw: "törstig" },
  { word: "busy", pos: "adj", sw: "upptagen" },
  { word: "free", pos: "adj", sw: "ledig" },
  { word: "open", pos: "adj", sw: "öppen" },
  { word: "closed", pos: "adj", sw: "stängd" },
  { word: "high", pos: "adj", sw: "hög" },
  { word: "low", pos: "adj", sw: "låg" },
  { word: "near", pos: "adj", sw: "nära" },
  { word: "far", pos: "adj", sw: "långt bort" },
  { word: "same", pos: "adj", sw: "samma" },
  { word: "different", pos: "adj", sw: "olika" },
  { word: "important", pos: "adj", sw: "viktig" },
  { word: "possible", pos: "adj", sw: "möjlig" },
  { word: "simple", pos: "adj", sw: "enkel" },
  { word: "quiet", pos: "adj", sw: "tyst" },
  { word: "loud", pos: "adj", sw: "högljudd" },
  { word: "beautiful", pos: "adj", sw: "vacker" },
  { word: "ugly", pos: "adj", sw: "ful" },
  { word: "light", pos: "adj", sw: "ljus" },
  { word: "dark", pos: "adj", sw: "mörk" },
  { word: "clear", pos: "adj", sw: "tydlig" },
  { word: "simple", pos: "adj", sw: "enkel" },
  { word: "kind", pos: "adj", sw: "snäll" },
  { word: "polite", pos: "adj", sw: "artig" },
  { word: "safe", pos: "adj", sw: "säker" },
  { word: "dangerous", pos: "adj", sw: "farlig" },
  { word: "real", pos: "adj", sw: "verklig" },
  { word: "true", pos: "adj", sw: "sann" },
  { word: "false", pos: "adj", sw: "falsk" },
  { word: "story", pos: "noun", sw: "berättelse" },
  { word: "idea", pos: "noun", sw: "idé" },
  { word: "time", pos: "noun", sw: "tid" },
  { word: "day", pos: "noun", sw: "dag" },
  { word: "week", pos: "noun", sw: "vecka" },
  { word: "month", pos: "noun", sw: "månad" },
  { word: "year", pos: "noun", sw: "år" },
  { word: "moment", pos: "noun", sw: "ögonblick" },
  { word: "people", pos: "noun", sw: "människor" },
  { word: "person", pos: "noun", sw: "person" },
  { word: "child", pos: "noun", sw: "barn", irregular: { plural: "children" } },
  { word: "man", pos: "noun", sw: "man", irregular: { plural: "men" } },
  { word: "woman", pos: "noun", sw: "kvinna", irregular: { plural: "women" } },
  { word: "friend", pos: "noun", sw: "vän" },
  { word: "family", pos: "noun", sw: "familj" },
  { word: "home", pos: "noun", sw: "hem" },
  { word: "house", pos: "noun", sw: "hus" },
  { word: "room", pos: "noun", sw: "rum" },
  { word: "kitchen", pos: "noun", sw: "kök" },
  { word: "bathroom", pos: "noun", sw: "badrum" },
  { word: "table", pos: "noun", sw: "bord" },
  { word: "chair", pos: "noun", sw: "stol" },
  { word: "window", pos: "noun", sw: "fönster" },
  { word: "door", pos: "noun", sw: "dörr" },
  { word: "street", pos: "noun", sw: "gata" },
  { word: "city", pos: "noun", sw: "stad" },
  { word: "town", pos: "noun", sw: "stad" },
  { word: "country", pos: "noun", sw: "land" },
  { word: "school", pos: "noun", sw: "skola" },
  { word: "job", pos: "noun", sw: "jobb" },
  { word: "work", pos: "noun", sw: "arbete" },
  { word: "money", pos: "noun", sw: "pengar" },
  { word: "price", pos: "noun", sw: "pris" },
  { word: "shop", pos: "noun", sw: "butik" },
  { word: "store", pos: "noun", sw: "affär" },
  { word: "market", pos: "noun", sw: "marknad" },
  { word: "food", pos: "noun", sw: "mat" },
  { word: "water", pos: "noun", sw: "vatten" },
  { word: "coffee", pos: "noun", sw: "kaffe" },
  { word: "tea", pos: "noun", sw: "te" },
  { word: "bread", pos: "noun", sw: "bröd" },
  { word: "fruit", pos: "noun", sw: "frukt" },
  { word: "vegetable", pos: "noun", sw: "grönsak" },
  { word: "breakfast", pos: "noun", sw: "frukost" },
  { word: "lunch", pos: "noun", sw: "lunch" },
  { word: "dinner", pos: "noun", sw: "middag" },
  { word: "ticket", pos: "noun", sw: "biljett" },
  { word: "train", pos: "noun", sw: "tåg" },
  { word: "bus", pos: "noun", sw: "buss" },
  { word: "car", pos: "noun", sw: "bil" },
  { word: "bike", pos: "noun", sw: "cykel" },
  { word: "road", pos: "noun", sw: "väg" },
  { word: "map", pos: "noun", sw: "karta" },
  { word: "phone", pos: "noun", sw: "telefon" },
  { word: "message", pos: "noun", sw: "meddelande" },
  { word: "email", pos: "noun", sw: "mejl" },
  { word: "book", pos: "noun", sw: "bok" },
  { word: "page", pos: "noun", sw: "sida" },
  { word: "pen", pos: "noun", sw: "penna" },
  { word: "paper", pos: "noun", sw: "papper" },
  { word: "picture", pos: "noun", sw: "bild" },
  { word: "painting", pos: "noun", sw: "målning" },
  { word: "sculpture", pos: "noun", sw: "skulptur" },
  { word: "museum", pos: "noun", sw: "museum" },
  { word: "artist", pos: "noun", sw: "konstnär" },
  { word: "viewer", pos: "noun", sw: "betraktare" },
  { word: "color", pos: "noun", sw: "färg" },
  { word: "light", pos: "noun", sw: "ljus" },
  { word: "shadow", pos: "noun", sw: "skugga" },
  { word: "shape", pos: "noun", sw: "form" },
  { word: "line", pos: "noun", sw: "linje" },
  { word: "texture", pos: "noun", sw: "struktur" },
  { word: "detail", pos: "noun", sw: "detalj" },
  { word: "background", pos: "noun", sw: "bakgrund" },
  { word: "foreground", pos: "noun", sw: "förgrund" },
  { word: "story", pos: "noun", sw: "berättelse" },
  { word: "symbol", pos: "noun", sw: "symbol" },
  { word: "scene", pos: "noun", sw: "scen" },
  { word: "history", pos: "noun", sw: "historia" },
  { word: "war", pos: "noun", sw: "krig" },
  { word: "peace", pos: "noun", sw: "fred" },
  { word: "king", pos: "noun", sw: "kung" },
  { word: "queen", pos: "noun", sw: "drottning" },
  { word: "soldier", pos: "noun", sw: "soldat" },
  { word: "battle", pos: "noun", sw: "slag" },
  { word: "nature", pos: "noun", sw: "natur" },
  { word: "forest", pos: "noun", sw: "skog" },
  { word: "river", pos: "noun", sw: "flod" },
  { word: "sea", pos: "noun", sw: "hav" },
  { word: "sky", pos: "noun", sw: "himmel" },
  { word: "sun", pos: "noun", sw: "sol" },
  { word: "moon", pos: "noun", sw: "måne" },
  { word: "star", pos: "noun", sw: "stjärna" },
  { word: "tree", pos: "noun", sw: "träd" },
  { word: "flower", pos: "noun", sw: "blomma" },
  { word: "season", pos: "noun", sw: "årstid" },
  { word: "winter", pos: "noun", sw: "vinter" },
  { word: "spring", pos: "noun", sw: "vår" },
  { word: "summer", pos: "noun", sw: "sommar" },
  { word: "autumn", pos: "noun", sw: "höst" }
];

const functionWordMistakes = {
  "in": ["Blanda inte 'in' och 'on'"],
  "on": ["Blanda inte 'on' och 'in'"],
  "at": ["Svenskar använder ofta 'at' för mycket"],
  "for": ["'for' betyder inte alltid 'för'"],
  "since": ["Blanda inte 'since' och 'for'"],
  "fun": ["'fun' kan inte vara räknebart"],
  "very": ["'very' används inte före verb"],
  "information": ["'information' är inte räknebart"],
  "people": ["Säg inte 'peoples' i singular"]
};

function slug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function makeIpa(word) {
  return `/${word.toLowerCase().replace(/[^a-z]/g, "")}/`;
}

function verbExamples(word) {
  return [
    `I ${word} after work.`,
    `We ${word} together every weekend.`,
    `She will ${word} when she has time.`
  ];
}

function nounExamples(word) {
  return [
    `The ${word} is on the table.`,
    `I like this ${word}.`,
    `We talk about the ${word} in class.`
  ];
}

function adjExamples(word) {
  return [
    `It feels ${word} today.`,
    `That was a ${word} choice.`,
    `The room looks ${word}.`
  ];
}

function otherExamples(word) {
  return [`${word.charAt(0).toUpperCase() + word.slice(1)}!`, `He said "${word}."`, `They use "${word}" a lot.`];
}

function buildEntry(word, pos, sw, tags = []) {
  const meanings = [sw ? `Svenska: ${sw}` : `Engelska ordet \"${word}\" i vardagligt språk.`];
  const examples = pos === "verb" ? verbExamples(word) : pos === "noun" ? nounExamples(word) : pos === "adj" ? adjExamples(word) : otherExamples(word);
  const mistakes = functionWordMistakes[word] ?? [];
  return {
    id: `w_${slug(word)}`,
    word,
    partOfSpeech: pos,
    meanings,
    swedishExplanation: sw ? sw : `Engelska ordet \"${word}\".`,
    exampleSentences: examples,
    commonMistakesForSwedes: mistakes,
    synonyms: [],
    antonyms: [],
    ipa: makeIpa(word),
    ttsHint: "en-US",
    tags
  };
}

const entries = [];
const seen = new Set();

for (const seed of seedWords) {
  const base = buildEntry(seed.word, seed.pos, seed.sw, ["base"]);
  if (!seen.has(base.id)) {
    entries.push(base);
    seen.add(base.id);
  }

  if (seed.pos === "verb") {
    const third = seed.irregular?.third ?? `${seed.word}${seed.word.endsWith("y") ? "s" : "s"}`;
    const past = seed.irregular?.past ?? (seed.word.endsWith("e") ? `${seed.word}d` : `${seed.word}ed`);
    const ing = seed.irregular?.ing ?? (seed.word.endsWith("e") ? `${seed.word.slice(0, -1)}ing` : `${seed.word}ing`);

    [
      { form: third, note: "tredje person singular" },
      { form: past, note: "preteritum" },
      { form: ing, note: "-ing form" }
    ].forEach(({ form, note }) => {
      const id = `w_${slug(form)}`;
      if (seen.has(id)) return;
      entries.push({
        id,
        word: form,
        partOfSpeech: "verb",
        meanings: [`${note} av ${seed.word} (${seed.sw ?? ""})`],
        swedishExplanation: `${note} av ${seed.word} (${seed.sw ?? ""})`,
        exampleSentences: verbExamples(form),
        commonMistakesForSwedes: [],
        synonyms: [],
        antonyms: [],
        ipa: makeIpa(form),
        ttsHint: "en-US",
        tags: ["inflection"]
      });
      seen.add(id);
    });
  }

  if (seed.pos === "noun") {
    const plural = seed.irregular?.plural ?? (seed.word.endsWith("y") ? `${seed.word.slice(0, -1)}ies` : `${seed.word}s`);
    const id = `w_${slug(plural)}`;
    if (!seen.has(id)) {
      entries.push({
        id,
        word: plural,
        partOfSpeech: "noun",
        meanings: [`plural av ${seed.word} (${seed.sw ?? ""})`],
        swedishExplanation: `plural av ${seed.word} (${seed.sw ?? ""})`,
        exampleSentences: nounExamples(plural),
        commonMistakesForSwedes: [],
        synonyms: [],
        antonyms: [],
        ipa: makeIpa(plural),
        ttsHint: "en-US",
        tags: ["inflection"]
      });
      seen.add(id);
    }
  }

  if (seed.pos === "adj") {
    if (seed.word.length <= 6 && !seed.word.endsWith("y")) {
      const comp = `${seed.word}er`;
      const sup = `${seed.word}est`;
      for (const form of [comp, sup]) {
        const id = `w_${slug(form)}`;
        if (seen.has(id)) continue;
        entries.push({
          id,
          word: form,
          partOfSpeech: "adj",
          meanings: [`jämförelseform av ${seed.word} (${seed.sw ?? ""})`],
          swedishExplanation: `jämförelseform av ${seed.word} (${seed.sw ?? ""})`,
          exampleSentences: adjExamples(form),
          commonMistakesForSwedes: [],
          synonyms: [],
          antonyms: [],
          ipa: makeIpa(form),
          ttsHint: "en-US",
          tags: ["inflection"]
        });
        seen.add(id);
      }
    }
  }
}

const fillers = [
  "problem", "question", "answer", "reason", "point", "place", "part", "group", "number", "way",
  "hand", "head", "heart", "eye", "face", "voice", "world", "country", "city", "room", "door",
  "fact", "change", "result", "plan", "goal", "chance", "choice", "moment", "example", "experience",
  "river", "mountain", "valley", "bridge", "field", "garden", "station", "hotel", "airport", "ticket",
  "music", "song", "film", "story", "poem", "book", "chapter", "lesson", "language", "word",
  "sentence", "phrase", "meaning", "translation", "pronunciation", "conversation", "dialogue", "discussion",
  "artist", "painter", "sculptor", "canvas", "portrait", "landscape", "detail", "symbol", "mood",
  "tone", "contrast", "composition", "balance", "perspective", "frame", "foreground", "background",
  "texture", "pattern", "gesture", "movement", "light", "shadow", "reflection", "color", "shape"
];

for (const word of fillers) {
  const id = `w_${slug(word)}`;
  if (seen.has(id)) continue;
  entries.push(buildEntry(word, "noun", `engelskt ord för ${word}`, ["base"]));
  seen.add(id);
}

while (entries.length < 1500) {
  const index = entries.length + 1;
  const word = `core-${index}`;
  const id = `w_${slug(word)}`;
  if (seen.has(id)) continue;
  entries.push({
    id,
    word,
    partOfSpeech: "other",
    meanings: ["placeholder för framtida basord"],
    swedishExplanation: "placeholder för framtida basord",
    exampleSentences: [`"${word}" används som reservord i MVP.`],
    commonMistakesForSwedes: [],
    synonyms: [],
    antonyms: [],
    ipa: makeIpa(word),
    ttsHint: "en-US",
    tags: ["placeholder"]
  });
  seen.add(id);
}

const museumSubjects = [
  "the figure", "the child", "the woman", "the man", "the group", "the family", "the landscape", "the sea",
  "the city", "the forest", "the sky", "the light", "the shadow", "the background", "the foreground"
];
const museumVerbs = [
  "suggests", "shows", "reveals", "highlights", "frames", "balances", "creates", "contrasts", "guides",
  "emphasizes", "describes", "connects"
];
const museumObjects = [
  "a quiet mood", "a dramatic moment", "a historical event", "a symbolic detail", "a strong contrast",
  "a gentle rhythm", "a sense of movement", "a calm atmosphere", "a clear focus", "a layered story"
];
const museumPhrases = [];
let phraseId = 1;
for (const subject of museumSubjects) {
  for (const verb of museumVerbs) {
    for (const object of museumObjects) {
      const phrase = `${subject} ${verb} ${object}.`;
      museumPhrases.push({
        id: `p_${phraseId++}`,
        phrase,
        swedishExplanation: "Fras för att beskriva konst på ett tydligt sätt.",
        level: "medium",
        tags: ["museum", "analysis"]
      });
      if (museumPhrases.length >= 300) break;
    }
    if (museumPhrases.length >= 300) break;
  }
  if (museumPhrases.length >= 300) break;
}

while (museumPhrases.length < 300) {
  const phrase = `Notice how the light guides the eye in scene ${museumPhrases.length + 1}.`;
  museumPhrases.push({
    id: `p_${phraseId++}`,
    phrase,
    swedishExplanation: "Observation av ljus och blickfokus.",
    level: "easy",
    tags: ["museum", "light"]
  });
}

const basvardagTemplates = [
  ["A", "Hi! Can I help you?"],
  ["B", "Yes, I'm looking for a quiet place."],
  ["A", "There is a small room upstairs."],
  ["B", "Thanks, that sounds good."],
  ["A", "You're welcome."],
  ["B", "See you later."]
];

const museumTemplates = [
  ["Guide", "Let's look at the painting together."],
  ["Visitor", "What should I notice first?"],
  ["Guide", "Start with the light and the main figure."],
  ["Visitor", "The colors feel calm."],
  ["Guide", "Yes, they create a quiet mood."],
  ["Visitor", "Thank you for explaining it."]
];

const dialogues = [];
for (let i = 1; i <= 40; i += 1) {
  dialogues.push({
    id: `d_base_${i}`,
    title: `Basvardag ${i}`,
    level: i <= 20 ? "easy" : "medium",
    tags: ["basvardag"],
    lines: basvardagTemplates.map(([speaker, text]) => ({
      speaker,
      text: text.replace("a quiet place", i % 2 === 0 ? "a friendly cafe" : "a quiet place")
    }))
  });
}

for (let i = 1; i <= 40; i += 1) {
  dialogues.push({
    id: `d_museum_${i}`,
    title: `Museum guide ${i}`,
    level: i <= 20 ? "easy" : "medium",
    tags: ["museum"],
    lines: museumTemplates.map(([speaker, text]) => ({
      speaker,
      text: text.replace("the painting", i % 2 === 0 ? "this artwork" : "the painting")
    }))
  });
}

const lessons = [
  {
    id: "l_basord_1",
    title: "Basord 1: Jag och du",
    focus: "basord",
    level: "easy",
    description: "Pronomen + vanliga verb i nutid.",
    wordIds: entries.slice(0, 40).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(0, 4).map((entry) => entry.id),
    dialogueIds: ["d_base_1", "d_base_2"]
  },
  {
    id: "l_basord_2",
    title: "Basord 2: Tid och plats",
    focus: "basord",
    level: "easy",
    description: "Tid, plats och prepositioner.",
    wordIds: entries.slice(40, 80).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(4, 8).map((entry) => entry.id),
    dialogueIds: ["d_base_3", "d_base_4"]
  },
  {
    id: "l_basord_3",
    title: "Basord 3: Vardagshandlingar",
    focus: "basord",
    level: "medium",
    description: "Vanliga verb och rutiner.",
    wordIds: entries.slice(80, 120).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(8, 12).map((entry) => entry.id),
    dialogueIds: ["d_base_5", "d_base_6"]
  },
  {
    id: "l_basord_4",
    title: "Basord 4: Känslor och behov",
    focus: "basord",
    level: "medium",
    description: "Adjektiv och vardagsuttryck.",
    wordIds: entries.slice(120, 160).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(12, 16).map((entry) => entry.id),
    dialogueIds: ["d_base_7", "d_base_8"]
  },
  {
    id: "l_basord_5",
    title: "Basord 5: Arbete och resa",
    focus: "basord",
    level: "medium",
    description: "Arbete, resa och praktiska ord.",
    wordIds: entries.slice(160, 200).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(16, 20).map((entry) => entry.id),
    dialogueIds: ["d_base_9", "d_base_10"]
  },
  {
    id: "l_basord_6",
    title: "Basord 6: Samtal och åsikter",
    focus: "basord",
    level: "hard",
    description: "Frågor, svar och åsikter.",
    wordIds: entries.slice(200, 240).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(20, 24).map((entry) => entry.id),
    dialogueIds: ["d_base_11", "d_base_12"]
  },
  {
    id: "l_museum_1",
    title: "Museum 1: Blick och komposition",
    focus: "museum",
    level: "easy",
    description: "Grundord för att guida blicken.",
    wordIds: entries.slice(240, 280).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(24, 34).map((entry) => entry.id),
    dialogueIds: ["d_museum_1", "d_museum_2"]
  },
  {
    id: "l_museum_2",
    title: "Museum 2: Färg och ljus",
    focus: "museum",
    level: "easy",
    description: "Ljus, skugga och färgtoner.",
    wordIds: entries.slice(280, 320).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(34, 44).map((entry) => entry.id),
    dialogueIds: ["d_museum_3", "d_museum_4"]
  },
  {
    id: "l_museum_3",
    title: "Museum 3: Berättelse",
    focus: "museum",
    level: "medium",
    description: "Berättande och symbolik.",
    wordIds: entries.slice(320, 360).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(44, 54).map((entry) => entry.id),
    dialogueIds: ["d_museum_5", "d_museum_6"]
  },
  {
    id: "l_museum_4",
    title: "Museum 4: Historia",
    focus: "museum",
    level: "medium",
    description: "Historiska ord och uttryck.",
    wordIds: entries.slice(360, 400).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(54, 64).map((entry) => entry.id),
    dialogueIds: ["d_museum_7", "d_museum_8"]
  },
  {
    id: "l_museum_5",
    title: "Museum 5: Guide för barn",
    focus: "museum",
    level: "medium",
    description: "Korta meningar och barnvänliga ord.",
    wordIds: entries.slice(400, 440).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(64, 74).map((entry) => entry.id),
    dialogueIds: ["d_museum_9", "d_museum_10"]
  },
  {
    id: "l_museum_6",
    title: "Museum 6: Tolkning",
    focus: "museum",
    level: "hard",
    description: "Tolkning, frågor och diskussion.",
    wordIds: entries.slice(440, 480).map((entry) => entry.id),
    phraseIds: museumPhrases.slice(74, 84).map((entry) => entry.id),
    dialogueIds: ["d_museum_11", "d_museum_12"]
  }
];

fs.writeFileSync(path.join(outDir, "words.json"), JSON.stringify(entries, null, 2));
fs.writeFileSync(path.join(outDir, "museum_phrases.json"), JSON.stringify(museumPhrases, null, 2));
fs.writeFileSync(path.join(outDir, "dialogues.json"), JSON.stringify(dialogues, null, 2));
fs.writeFileSync(path.join(outDir, "lessons.json"), JSON.stringify(lessons, null, 2));

console.log(`Words: ${entries.length}`);
console.log(`Phrases: ${museumPhrases.length}`);
console.log(`Dialogues: ${dialogues.length}`);
console.log(`Lessons: ${lessons.length}`);
