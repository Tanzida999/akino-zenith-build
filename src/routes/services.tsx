import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Check, Sparkles, Code2, ShoppingBag, Globe2,
  Palette, CreditCard, Megaphone, Search, Wrench, TrendingUp,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "サービス・料金 — 株式会社アキノグループ" },
      { name: "description", content: "Web制作・ECサイト・SNS運用・ブランディング・月額メンテナンスの明快な日本円料金。¥80,000〜。" },
    ],
  }),
});

function Services() {
  const { t } = useI18n();

  const PACKAGES = [
    { icon: Sparkles, num: "01", tag: t("svc.p1.tag"), title: t("svc.p1.title"),
      price: "¥80,000 – ¥150,000", note: t("svc.p1.note"),
      features: [t("svc.p1.f1"), t("svc.p1.f2"), t("svc.p1.f3"), t("svc.p1.f4"), t("svc.p1.f5")], accent: false },
    { icon: Code2, num: "02", tag: t("svc.p2.tag"), title: t("svc.p2.title"),
      price: "¥180,000 – ¥350,000", note: t("svc.p2.note"),
      features: [t("svc.p2.f1"), t("svc.p2.f2"), t("svc.p2.f3"), t("svc.p2.f4"), t("svc.p2.f5")], accent: true },
    { icon: ShoppingBag, num: "03", tag: t("svc.p3.tag"), title: t("svc.p3.title"),
      price: "¥180,000 – ¥350,000", note: t("svc.p3.note"),
      features: [t("svc.p3.f1"), t("svc.p3.f2"), t("svc.p3.f3"), t("svc.p3.f4"), t("svc.p3.f5")], accent: false },
  ];

  const ADDONS = [
    { icon: Globe2, title: t("svc.a1.title"), price: "¥400,000 – ¥800,000+", desc: t("svc.a1.desc") },
    { icon: Palette, title: t("svc.a2.title"), price: "¥10,000 – ¥30,000", desc: t("svc.a2.desc") },
    { icon: CreditCard, title: t("svc.a3.title"), price: "¥5,000 – ¥15,000", desc: t("svc.a3.desc") },
    { icon: Megaphone, title: t("svc.a4.title"), price: "¥30,000 – ¥100,000 / mo", desc: t("svc.a4.desc") },
    { icon: Search, title: t("svc.a5.title"), price: "¥20,000+", desc: t("svc.a5.desc") },
  ];

  const MAINTENANCE = [
    { tag: t("svc.m1.tag"), price: "¥10,000 – ¥20,000", desc: t("svc.m1.desc"),
      features: [t("svc.m1.f1"), t("svc.m1.f2"), t("svc.m1.f3"), t("svc.m1.f4"), t("svc.m1.f5")], accent: false },
    { tag: t("svc.m2.tag"), price: "¥30,000 – ¥80,000", desc: t("svc.m2.desc"),
      features: [t("svc.m2.f1"), t("svc.m2.f2"), t("svc.m2.f3"), t("svc.m2.f4"), t("svc.m2.f5")], accent: true },
  ];

  return (
    <>
      <PageHeader
        kicker={t("svc.kicker")}
        title={<>{t("svc.title.a")}<em className="not-italic text-accent">{t("svc.title.b")}</em>{t("svc.title.c")}</>}
        sub={t("svc.sub")}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 -mt-4">
        <div className="bg-highlight text-highlight-foreground inline-flex items-center gap-3 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold">
          <span>{t("svc.promo.label")}</span>
          <span className="opacity-60">|</span>
          <span>{t("svc.promo.text")}</span>
        </div>
      </div>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">{t("svc.main.kicker")}</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium max-w-2xl">{t("svc.main.title")}</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className={`relative h-full p-8 lg:p-10 border ${p.accent ? "border-accent bg-accent text-accent-foreground shadow-[var(--shadow-glow)]" : "border-border bg-background"}`}>
                  {p.accent && (
                    <span className="absolute -top-3 left-8 bg-highlight text-highlight-foreground text-[10px] tracking-widest uppercase font-bold px-3 py-1">
                      {t("svc.popular")}
                    </span>
                  )}
                  <div className="flex items-start justify-between mb-6">
                    <p.icon className={`h-7 w-7 ${p.accent ? "text-highlight" : "text-accent"}`} strokeWidth={1.5} />
                    <span className={`text-[10px] tracking-widest uppercase ${p.accent ? "text-accent-foreground/60" : "text-muted-foreground"}`}>{p.num}</span>
                  </div>
                  <p className={`text-[10px] tracking-[0.3em] uppercase mb-2 ${p.accent ? "text-highlight" : "text-accent"}`}>{p.tag}</p>
                  <h3 className={`text-2xl font-display font-medium mb-1 ${p.accent ? "text-accent-foreground" : ""}`}>{p.title}</h3>
                  <div className={`pt-4 pb-6 mb-6 border-b ${p.accent ? "border-accent-foreground/15" : "border-border"}`}>
                    <div className={`font-display text-3xl ${p.accent ? "text-highlight" : "text-foreground"}`}>{p.price}</div>
                    <p className={`text-[11px] mt-1 ${p.accent ? "text-accent-foreground/60" : "text-muted-foreground"}`}>{p.note}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className={`flex gap-3 text-sm ${p.accent ? "text-accent-foreground/90" : ""}`}>
                        <Check className={`h-4 w-4 shrink-0 mt-0.5 ${p.accent ? "text-highlight" : "text-accent"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-none h-12 ${
                      p.accent
                        ? "bg-highlight text-highlight-foreground hover:bg-highlight/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    <Link to="/contact">{t("svc.quote")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-10 tracking-wide">{t("svc.included")}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">{t("svc.addons.kicker")}</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium max-w-2xl">{t("svc.addons.title")}</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-14">
            {ADDONS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="bg-background p-8 h-full hover:bg-secondary/60 transition-colors">
                  <a.icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-medium mb-3">{a.title}</h3>
                  <p className="font-display text-xl text-accent mb-3">{a.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="bg-foreground text-background p-8 h-full flex flex-col justify-between">
                <div>
                  <Wrench className="h-6 w-6 text-highlight mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-medium">{t("svc.custom.title")}</h3>
                  <p className="text-sm text-background/70 mt-2 leading-relaxed">{t("svc.custom.desc")}</p>
                </div>
                <Link to="/contact" className="text-xs tracking-widest uppercase inline-flex items-center gap-2 text-highlight mt-6">
                  {t("svc.custom.cta")} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">{t("svc.maint.kicker")}</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium max-w-2xl">{t("svc.maint.title")}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">{t("svc.maint.sub")}</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mt-14 max-w-4xl">
            {MAINTENANCE.map((m, i) => (
              <Reveal key={m.tag} delay={i * 0.08}>
                <div className={`h-full p-8 lg:p-10 border ${m.accent ? "border-accent bg-foreground text-background" : "border-border bg-background"}`}>
                  <p className={`text-[10px] tracking-[0.3em] uppercase mb-4 ${m.accent ? "text-highlight" : "text-accent"}`}>{m.tag}</p>
                  {m.accent ? (
                    <TrendingUp className="h-7 w-7 text-highlight mb-4" strokeWidth={1.5} />
                  ) : (
                    <Wrench className="h-7 w-7 text-accent mb-4" strokeWidth={1.5} />
                  )}
                  <p className={`text-sm mb-6 ${m.accent ? "text-background/70" : "text-muted-foreground"}`}>{m.desc}</p>
                  <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-current/10">
                    <span className={`font-display text-3xl ${m.accent ? "text-highlight" : ""}`}>{m.price}</span>
                    <span className={`text-xs ${m.accent ? "text-background/60" : "text-muted-foreground"}`}>{t("svc.month")}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {m.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm">
                        <Check className={`h-4 w-4 shrink-0 mt-0.5 ${m.accent ? "text-highlight" : "text-accent"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-none h-12 ${
                      m.accent
                        ? "bg-highlight text-highlight-foreground hover:bg-highlight/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    <Link to="/contact">{t("svc.subscribe")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-highlight mb-6">{t("svc.cta.kicker")}</p>
          <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight text-balance">{t("svc.cta.title")}</h2>
          <p className="mt-6 text-accent-foreground/80 max-w-2xl mx-auto">{t("svc.cta.sub")}</p>
          <Button asChild size="lg" className="mt-10 bg-highlight text-highlight-foreground hover:bg-highlight/90 rounded-none h-14 px-10">
            <Link to="/contact">{t("svc.cta.btn")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
