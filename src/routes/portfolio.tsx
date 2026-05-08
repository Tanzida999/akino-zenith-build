import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Portfolio — Akino Group Co., Ltd." },
      { name: "description", content: "Selected web, social, and cleaning projects delivered by Akino Group across Japan." },
      { property: "og:title", content: "Portfolio — Akino Group" },
      { property: "og:description", content: "Selected work — websites, campaigns, and facility transformations." },
    ],
  }),
});

const PROJECTS = [
  { cat: "Web", title: "Mori Architects", desc: "Bilingual studio website with custom CMS.", year: "2024" },
  { cat: "Cleaning", title: "Shibuya Tower", desc: "Daily maintenance for 32-floor mixed-use facility.", year: "2024" },
  { cat: "Social", title: "Sakura Cafe", desc: "Instagram-led campaign — +180% followers in 6 months.", year: "2024" },
  { cat: "Web", title: "Kyoto Ryokan", desc: "Booking platform with multilingual support.", year: "2023" },
  { cat: "Cleaning", title: "Marunouchi Office", desc: "Post-renovation deep cleaning for 4,000 m².", year: "2023" },
  { cat: "Social", title: "Tokyo Kitchen", desc: "TikTok strategy reaching 2M impressions monthly.", year: "2024" },
  { cat: "Branding", title: "Aoba Clinic", desc: "Identity refresh and printed collateral.", year: "2023" },
  { cat: "Web", title: "Akino Internal", desc: "Operational dashboard for 50+ field staff.", year: "2024" },
] as const;

const CATS = ["All", "Web", "Cleaning", "Social", "Branding"] as const;

function Portfolio() {
  const [active, setActive] = useState<(typeof CATS)[number]>("All");
  const filtered = PROJECTS.filter((p) => active === "All" || p.cat === active);

  return (
    <>
      <PageHeader
        kicker="Portfolio — 実績"
        title={<>Selected <em className="not-italic text-accent">work</em>.</>}
        sub="A glimpse of recent engagements across cleaning, web, social, and brand. Every project is treated as a long-term partnership."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-2 text-xs tracking-widest uppercase border transition-colors",
                  active === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-accent hover:text-accent",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={(i % 6) * 0.05}>
                <article className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-end p-6">
                      <span className="font-display text-[8rem] leading-none text-foreground/5">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <span className="font-display text-3xl text-foreground/40 group-hover:text-accent transition-colors text-center">{p.title}</span>
                    </div>
                    <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-background/80 backdrop-blur px-2 py-1">{p.cat}</div>
                  </div>
                  <div className="mt-4 flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-medium">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                    </div>
                    <span className="text-xs tracking-widest text-muted-foreground shrink-0">{p.year}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}