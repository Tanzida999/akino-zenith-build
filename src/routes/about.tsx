import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Compass, Heart, Mountain, Target } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "会社概要 — 株式会社アキノグループ" },
      { name: "description", content: "株式会社アキノグループ — 東京を拠点に清掃・Web制作・デジタル支援を提供する信頼の会社。" },
      { property: "og:title", content: "About Akino Group" },
    ],
  }),
});

function About() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        kicker={t("about.kicker")}
        title={<>{t("about.title.a")}<em className="not-italic text-accent">{t("about.title.b")}</em>{t("about.title.c")}</>}
        sub={t("about.sub")}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("about.mission")}</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-6">{t("about.mission.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("about.mission.body")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("about.vision")}</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-6">{t("about.vision.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("about.vision.body")}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("about.values")}</p>
            <h2 className="text-4xl font-display font-medium mb-16 max-w-2xl">{t("about.values.title")}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, jp: t("about.v1.jp"), title: t("about.v1.title"), desc: t("about.v1.desc") },
              { icon: Mountain, jp: t("about.v2.jp"), title: t("about.v2.title"), desc: t("about.v2.desc") },
              { icon: Compass, jp: t("about.v3.jp"), title: t("about.v3.title"), desc: t("about.v3.desc") },
              { icon: Target, jp: t("about.v4.jp"), title: t("about.v4.title"), desc: t("about.v4.desc") },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="bg-background p-8 border border-border h-full shadow-[var(--shadow-soft)]">
                  <div className="flex items-center justify-between mb-6">
                    <v.icon className="h-5 w-5 text-accent" />
                    <span className="text-xs tracking-widest text-muted-foreground">{v.jp}</span>
                  </div>
                  <h3 className="font-display text-xl mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("about.story")}</p>
            <h2 className="text-4xl font-display font-medium mb-16">{t("about.story.title")}</h2>
          </Reveal>
          <div className="space-y-12 relative before:content-[''] before:absolute before:left-24 before:top-2 before:bottom-2 before:w-px before:bg-border">
            {[
              { year: "2018", title: t("about.t1.title"), desc: t("about.t1.desc") },
              { year: "2020", title: t("about.t2.title"), desc: t("about.t2.desc") },
              { year: "2022", title: t("about.t3.title"), desc: t("about.t3.desc") },
              { year: "2024", title: t("about.t4.title"), desc: t("about.t4.desc") },
            ].map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <div className="grid grid-cols-[6rem_1fr] gap-8 items-start">
                  <div className="font-display text-2xl text-accent relative">
                    <span className="absolute right-0 top-3 h-3 w-3 rounded-full bg-accent translate-x-[calc(50%+0.5rem)]" />
                    {m.year}
                  </div>
                  <div className="pl-8">
                    <h3 className="text-xl font-display font-medium mb-2">{m.title}</h3>
                    <p className="text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("about.team")}</p>
            <h2 className="text-4xl font-display font-medium mb-16">{t("about.team.title")}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Akino Hiroshi", role: t("about.team.p1.role"), jp: "代表取締役" },
              { name: "Sato Yuki", role: t("about.team.p2.role"), jp: "執行役員" },
              { name: "Tanaka Mei", role: t("about.team.p3.role"), jp: "リードエンジニア" },
              { name: "Yamada Ren", role: t("about.team.p4.role"), jp: "ブランド戦略" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="bg-background border border-border p-6 text-center">
                  <div className="aspect-square bg-gradient-to-br from-muted to-secondary mb-6 flex items-center justify-center">
                    <span className="font-display text-5xl text-foreground/20">{p.name.split(" ")[0][0]}</span>
                  </div>
                  <p className="text-xs tracking-widest text-muted-foreground mb-1">{p.jp}</p>
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
