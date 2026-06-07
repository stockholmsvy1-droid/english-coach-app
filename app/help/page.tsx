export default function HelpPage() {
  return (
    <div>
      <div className="section-title">
        <h2>Användarmanual</h2>
      </div>
      <div className="card">
        <h3>Snabbstart</h3>
        <div className="list">
          <p>1. Börja med <strong>Placeringstest</strong> för att hitta dina basords‑luckor.</p>
          <p>2. Gå till <strong>Snabbträning</strong> och öva i korta pass.</p>
          <p>3. Öppna <strong>SRS</strong> och repetera dagligen.</p>
        </div>
      </div>
      <div className="card">
        <h3>Basord och museum‑engelska</h3>
        <p>
          Basord är de vanligaste orden i engelska. Vi tränar dem först så att du förstår tal och text.
          Museum‑paketet ger fraser för konst, historia och bildanalys.
        </p>
      </div>
      <div className="card">
        <h3>Så fungerar SRS</h3>
        <p>
          SRS (spaced repetition) visar ord oftare när du är osäker, och mer sällan när du kan dem.
          Tryck på <strong>Initiera SRS (200 basord)</strong> för att skapa kort.
        </p>
      </div>
      <div className="card">
        <h3>Tips för uttal</h3>
        <p>
          IPA visas på varje ordkort. Fokusera på vokalerna: å, ä och ö i svenskan motsvarar inte alltid
          engelska ljud. Öva långsamt och tydligt.
        </p>
      </div>
    </div>
  );
}
