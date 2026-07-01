// components/sections/Solutions.tsx
import { products } from "@/content/site";
import Reveal from "@/components/ui/Reveal";

export default function Solutions() {
  return (
    <section id="solucoes" className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal>
          <h2 className="text-4xl font-semibold">Um ecossistema. Três frentes.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="rounded-[--radius-card] border border-graphite/10 bg-white p-8">
                <span className="font-mono text-xs uppercase tracking-widest">
                  {p.role}
                </span>
                <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-graphite/70">{p.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => <li key={f}>— {f}</li>)}
                </ul>
                <a href={p.href} className="mt-5 inline-block font-semibold">Ver {p.role} →</a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}