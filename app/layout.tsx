import "../styles/globals.css";
import { Nav } from "../components/Nav";

export const metadata = {
  title: "English Coach",
  description: "Basord + museum guide för svenska vuxna"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <main>
          <div className="container">
            <header className="header">
              <div className="brand">
                <h1>English Coach</h1>
                <p>Basord, kontext och museum‑engelska för svenska vuxna.</p>
              </div>
              <Nav />
            </header>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
