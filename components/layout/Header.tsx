// components/layout/Header.tsx
"use client";
import { useState } from "react";
import GMark from "@/components/ui/GMark";

const links = [
  { href: "#solucoes",   label: "Soluções" },
  { href: "#tracker",    label: "Tracker Pro" },
  { href: "#segmentos",  label: "Segmentos" },
  { href: "#porque",     label: "Por que Getel" },
  { href: "#contato",    label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          <GMark className="h-8 w-8" /> Getel
        </a>

        <ul className={`${open ? "flex" : "hidden"} md:flex gap-7`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}