# English Coach (Svensk basord + museum‑engelska)

## Varför denna teknik
**Val:** A) Webapp – Next.js + TypeScript + lokal lagring (localStorage) + förberedd struktur för SQLite via wasm senare.  
**Motivering:** Snabbast leverans med tydlig offline‑möjlighet och enkel distribution i webbläsare. Allt innehåll bundlas lokalt och träningsflöden fungerar utan nät.

## Kör lokalt

```bash
npm install --legacy-peer-deps
npm run dev
```

Öppna `http://localhost:3000`

> **OBS:** Använd `--legacy-peer-deps` vid installation. Kör **inte** `npm audit fix --force` — det nedgraderar Next.js till v9.x som är inkompatibel med projektets App Router-struktur och kraschar med ett `pages directory`-fel.

## Känd bugg

En "Hydration error" visas i Next.js dev-overlay vid start (`Text content does not match: Server "0" Client "362"`). Detta är ofarligt — appen fungerar korrekt. Orsaken är att servern renderar ett startvärde innan `localStorage`-data hunnit läsas in.

## Arkitekturöversikt
- `app/` – Next.js App Router sidor
- `components/` – återanvändbara UI‑block (Dashboard, DialogueCard, LessonCard, Nav m.fl.)
- `lib/` – SRS‑logik, urval och lagring
- `data/` – inbyggd ordlista, fraser, dialoger, lektioner
- `tests/` – SRS‑tester + innehållsvalidering

## Pedagogisk modell (kort)
1. **Basordsbygge först**: högfrekventa funktionsord + vardagsverb/adjektiv säkerställer att lyssning och läsning blir begriplig.
2. **Lucktätning**: placeringstest och snabba pass prioriterar ord som bedöms osäkra/okända.
3. **Spaced repetition**: fel och tvekan ger tätare intervall tills ordet sitter.
4. **Meningsfull kontext**: ord tränas i vardagsdialoger och museum‑scenarier för att bygga aktivt ordförråd.
5. **Aktiv produktion**: användaren skriver/talar korta meningar och får återkoppling på enkel nivå.

## Integritet
All data lagras lokalt i webbläsaren. Synk är tänkt som opt‑in och finns inte i MVP.

## Offline
Allt innehåll ligger lokalt i appen. För full offline‑PWA behövs caching (service worker) i nästa steg.

## Kända begränsningar
- **IPA/uttal** för de auto‑genererade orden är förenklad och behöver riktig fonetisk data.
- **Basordslistan** innehåller placeholders som måste bytas mot riktiga ord vid nästa dataimport.
- **TTS** är markerad som `en-US` men är inte kopplad till en faktisk TTS‑motor ännu.
- **Feedback för aktiv produktion** är enkel och bör ersättas av grammatik‑/stilanalys.

## Nästa steg
- Importverktyg för extern ordlista (CSV/JSON) + riktig IPA
- Offline‑PWA caching
- Mikrofon‑stöd och röstfeedback
- Mer avancerad felanalys för svensktalande
- Fixa hydration-buggen i Dashboard.tsx (`mounted`-state)

## Hur den byggdes
Byggd 4 februari 2026 med **OpenAI Codex** (Next.js 14 / React / TypeScript).
