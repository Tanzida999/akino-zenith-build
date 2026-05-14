import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
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
      { title: "実績 — 株式会社アキノグループ" },
      { name: "description", content: "アキノグループが日本全国で手がけたWeb・SNS・清掃の実績紹介。" },
    ],
  }),
});

type CatKey = "all" | "web" | "cleaning" | "social" | "branding";

function Portfolio() {
  const { t } = useI18n();
  const [active, setActive] = useState<CatKey>("all");

  const CATS: { key: CatKey; label: string }[] = [
    { key: "all", label: t("pf.cat.all") },
    { key: "web", label: t("pf.cat.web") },
    { key: "cleaning", label: t("pf.cat.cleaning") },
    { key: "social", label: t("pf.cat.social") },
    { key: "branding", label: t("pf.cat.branding") },
  ];

  const PROJECTS: { cat: CatKey; catLabel: string; title: string; desc: string; year: string; img: string }[] = [
    { cat: "web", catLabel: t("pf.cat.web"), title: t("pf.p1.title"), desc: t("pf.p1.desc"), year: "2024", img: p1 },
    { cat: "cleaning", catLabel: t("pf.cat.cleaning"), title: t("pf.p2.title"), desc: t("pf.p2.desc"), year: "2024", img: p2 },
    { cat: "social", catLabel: t("pf.cat.social"), title: t("pf.p3.title"), desc: t("pf.p3.desc"), year: "2024", img: p3 },
    { cat: "web", catLabel: t("pf.cat.web"), title: t("pf.p4.title"), desc: t("pf.p4.desc"), year: "2023", img: p4 },
    { cat: "cleaning", catLabel: t("pf.cat.cleaning"), title: t("pf.p5.title"), desc: t("pf.p5.desc"), year: "2023", img: p5 },
    { cat: "social", catLabel: t("pf.cat.social"), title: t("pf.p6.title"), desc: t("pf.p6.desc"), year: "2024", img: p6 },
    { cat: "branding", catLabel: t("pf.cat.branding"), title: t("pf.p7.title"), desc: t("pf.p7.desc"), year: "2023", img: p7 },
    { cat: "web", catLabel: t("pf.cat.web"), title: t("pf.p8.title"), desc: t("pf.p8.desc"), year: "2024", img: p8 },
  ];

  const filtered = PROJECTS.filter((p) => active === "all" || p.cat === active);

  return (
    <>
      <PageHeader
        kicker={t("pf.kicker")}
        title={<>{t("pf.title.a")}<em className="not-italic text-accent">{t("pf.title.b")}</em>{t("pf.title.c")}</>}
        sub={t("pf.sub")}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {CATS.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "px-4 py-2 text-xs tracking-widest uppercase border transition-colors",
                  active === c.key
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-accent hover:text-accent",
                )}
              >
                {c.label}
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
                    <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-background/85 backdrop-blur px-2 py-1">{p.catLabel}</div>
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
