import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono} from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Getel Tecnologia — Transformando tecnologia em inteligência para negócios",
  description:
    "Outsourcing de TI B2B: locação de equipamentos, suporte especializado e gestão de ativos com o Tracker Pro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="bg-paper text-graphite font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
