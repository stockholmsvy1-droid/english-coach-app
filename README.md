# English Coach (Svensk basord + museum‑engelska)

## Varför denna teknik
**Val:** A) Webapp – Next.js + TypeScript + lokal lagring (localStorage) + förberedd struktur för SQLite via wasm senare. 
**Motivering:** Snabbast leverans med tydlig offline‑möjlighet och enkel distribution i webbläsare. Allt innehåll bundlas lokalt och träningsflöden fungerar utan nät.

## Kör lokalt
1. `npm install`
2. `npm run dev`
3. Öppna `http://localhost:3000`

## Arkitekturöversikt
- `app/` – Next.js App Router sidor
- `components/` – återanvändbara UI‑block
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
