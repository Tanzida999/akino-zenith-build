import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";
import p5 from "@/assets/proj-5.jpg";
import p6 from "@/assets/proj-6.jpg";
import p7 from "@/assets/proj-7.jpg";
import p8 from "@/assets/proj-8.jpg";

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
  { cat: "Web", title: "Mori Architects", desc: "Bilingual studio website with custom CMS.", year: "2024", img: p1 },
  { cat: "Cleaning", title: "Shibuya Tower", desc: "Daily maintenance for 32-floor mixed-use facility.", year: "2024", img: p2 },
  { cat: "Social", title: "Sakura Cafe", desc: "Instagram-led campaign — +180% followers in 6 months.", year: "2024", img: p3 },
  { cat: "Web", title: "Kyoto Ryokan", desc: "Booking platform with multilingual support.", year: "2023", img: p4 },
  { cat: "Cleaning", title: "Marunouchi Office", desc: "Post-renovation deep cleaning for 4,000 m².", year: "2023", img: p5 },
  { cat: "Social", title: "Tokyo Kitchen", desc: "TikTok strategy reaching 2M impressions monthly.", year: "2024", img: p6 },
  { cat: "Branding", title: "Aoba Clinic", desc: "Identity refresh and printed collateral.", year: "2023", img: p7 },
  { cat: "Web", title: "Akino Internal", desc: "Operational dashboard for 50+ field staff.", year: "2024", img: p8 },
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
                  <div className="aspect-[4/5] bg-secondary relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-background/85 backdrop-blur px-2 py-1">{p.cat}</div>
                    <div className="absolute bottom-4 right-4 font-display text-5xl text-background/80 mix-blend-difference">{String(i + 1).padStart(2, "0")}</div>
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