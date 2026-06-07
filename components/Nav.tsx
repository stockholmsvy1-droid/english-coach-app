import Link from "next/link";

const links = [
  { href: "/", label: "Översikt" },
  { href: "/test", label: "Placeringstest" },
  { href: "/train", label: "Snabbträning" },
  { href: "/srs", label: "SRS" },
  { href: "/basvardag", label: "Basvardag" },
  { href: "/museum", label: "Museum" },
  { href: "/lessons", label: "Lektioner" },
  { href: "/stats", label: "Statistik" },
  { href: "/help", label: "Hjälp" }
];

export function Nav() {
  return (
    <nav className="nav" aria-label="Huvudnavigation">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
