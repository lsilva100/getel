// lib/types.ts
export type BrandColor = "blue" | "green" | "magenta" | "orange";

export interface Product {
  id: "locacao" | "servicos" | "tracker";
  role: string;        // eyebrow: "Locação" | "Serviços" | "Plataforma"
  name: string;        // "GT Locação"
  tagline: string;
  features: string[];
  color: BrandColor;
  href: string;
}

export interface Pain {
  index: string;       // "01"
  title: string;
  description: string;
}

export interface Segment {
  id: string;
  label: string;       // "Logística"
}

export interface Pillar {
  key: string;         // "Data driven"
  title: string;
  description: string;
  color: BrandColor;
}