import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Check, Sparkles, Code2, ShoppingBag, Globe2,
  Palette, CreditCard, Megaphone, Search, Wrench, TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services & Pricing — Akino Group" },
      { name: "description", content: "Transparent pricing for website development, e-commerce, SNS management, branding, and monthly maintenance. From ¥80,000." },
      { property: "og:title", content: "Services & Pricing — Akino Group" },
      { property: "og:description", content: "Web design, Shopify, SNS management, and ongoing support — clear Japanese-yen pricing." },
    ],
  }),
});

const PACKAGES = [
  {
    icon: Sparkles, num: "01", tag: "Starter",
    title: "LP / Portfolio",
    jp: "ランディングページ・ポートフォリオ",
    price: "¥80,000 – ¥150,000",
    note: "1 project · delivery 2–3 weeks",
    features: [
      "1–5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Google Maps integration",
      "Contact form",
    ],
    accent: false,
  },
  {
    icon: Code2, num: "02", tag: "Standard",
    title: "Business Website",
    jp: "ビジネスサイト",
    price: "¥180,000 – ¥350,000",
    note: "Most popular · delivery 4–6 weeks",
    features: [
      "5–10 pages",
      "WordPress CMS",
      "Blog system included",
      "Advanced SEO",
      "Security & SSL",
    ],
    accent: true,
  },
  {
    icon: ShoppingBag, num: "03", tag: "E-commerce",
    title: "Shopify Store",
    jp: "Shopify ECサイト",
    price: "¥180,000 – ¥350,000",
    note: "Launch-ready · delivery 4–6 weeks",
    features: [
      "Theme setup & customization",
      "Up to 20 products",
      "Payment & shipping setup",
      "Social commerce ready",
      "Inventory & analytics",
    ],
    accent: false,
  },
];

const ADDONS = [
  { icon: Globe2, title: "Premium Corporate", jp: "プレミアム", price: "¥400,000 – ¥800,000+", desc: "Custom UI/UX, multilingual, API integration, headless architecture." },
  { icon: Palette, title: "Logo Design", jp: "ロゴデザイン", price: "¥10,000 – ¥30,000", desc: "Original mark, typography lockup, source files." },
  { icon: CreditCard, title: "Business Card Design", jp: "名刺デザイン", price: "¥5,000 – ¥15,000", desc: "Bilingual layout, print-ready PDF, design only." },
  { icon: Megaphone, title: "SNS Management", jp: "SNS運用代行", price: "¥30,000 – ¥100,000 / month", desc: "Instagram, X, LINE, TikTok — content + community." },
  { icon: Search, title: "SEO Technical Setup", jp: "SEO設定", price: "¥20,000+", desc: "On-page SEO, schema, sitemap, Search Console wiring." },
];

const MAINTENANCE = [
  {
    tag: "Basic", jp: "ベーシック",
    price: "¥10,000 – ¥20,000",
    period: "/ month",
    desc: "Essential care to keep your site safe and online.",
    features: ["Weekly backups", "Security monitoring", "Plugin & core updates", "Uptime monitoring", "Email support"],
    accent: false,
  },
  {
    tag: "Growth", jp: "グロース",
    price: "¥30,000 – ¥80,000",
    period: "/ month",
    desc: "Active growth partnership — content, performance, reporting.",
    features: ["Everything in Basic", "Monthly SEO report", "2 blog posts / month", "Speed optimization", "Priority support"],
    accent: true,
  },
];

function Services() {
  return (
    <>
      <PageHeader
        kicker="Services & Pricing — サービス・料金"
        title={<>Make your business stronger, <em className="not-italic text-accent">online</em>.</>}
        sub="Transparent Japanese-yen pricing. Every plan includes mobile-responsive design and SNS integration as standard."
      />

      {/* Promo strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 -mt-4">
        <div className="bg-highlight text-highlight-foreground inline-flex items-center gap-3 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold">
          <span>限定キャンペーン</span>
          <span className="opacity-60">|</span>
          <span>Now 20% OFF · 初回相談 無料</span>
        </div>
      </div>

      {/* MAIN PACKAGES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">01 — Main Packages</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium max-w-2xl">主要プラン — Choose your foundation.</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className={`relative h-full p-8 lg:p-10 border ${p.accent ? "border-accent bg-accent text-accent-foreground shadow-[var(--shadow-glow)]" : "border-border bg-background"}`}>
                  {p.accent && (
                    <span className="absolute -top-3 left-8 bg-highlight text-highlight-foreground text-[10px] tracking-widest uppercase font-bold px-3 py-1">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-start justify-between mb-6">
                    <p.icon className={`h-7 w-7 ${p.accent ? "text-highlight" : "text-accent"}`} strokeWidth={1.5} />
                    <span className={`text-[10px] tracking-widest uppercase ${p.accent ? "text-accent-foreground/60" : "text-muted-foreground"}`}>{p.num}</span>
                  </div>
                  <p className={`text-[10px] tracking-[0.3em] uppercase mb-2 ${p.accent ? "text-highlight" : "text-accent"}`}>{p.tag}</p>
                  <h3 className={`text-2xl font-display font-medium mb-1 ${p.accent ? "text-accent-foreground" : ""}`}>{p.title}</h3>
                  <p className={`text-xs mb-6 ${p.accent ? "text-accent-foreground/60" : "text-muted-foreground"}`}>{p.jp}</p>

                  <div className={`pb-6 mb-6 border-b ${p.accent ? "border-accent-foreground/15" : "border-border"}`}>
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
                    <Link to="/contact">Request quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-10 tracking-wide">
            * 全プランにモバイルレスポンシブデザイン & SNS連携が標準で含まれます。
          </p>
        </div>
      </section>

      {/* PREMIUM & ADD-ONS */}
      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">02 — Premium & Add-ons</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium max-w-2xl">プレミアム & オプション</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-14">
            {ADDONS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="bg-background p-8 h-full hover:bg-secondary/60 transition-colors">
                  <a.icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-medium">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{a.jp}</p>
                  <p className="font-display text-xl text-accent mb-3">{a.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="bg-foreground text-background p-8 h-full flex flex-col justify-between">
                <div>
                  <Wrench className="h-6 w-6 text-highlight mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-medium">Custom requirements?</h3>
                  <p className="text-sm text-background/70 mt-2 leading-relaxed">
                    Tell us your goals — we'll scope the right combination of services.
                  </p>
                </div>
                <Link to="/contact" className="text-xs tracking-widest uppercase inline-flex items-center gap-2 text-highlight mt-6">
                  Talk to us <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">03 — Monthly Maintenance</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium max-w-2xl">月額メンテナンス — Stay secure, stay fast.</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Launch is just the beginning. Our maintenance plans keep your site protected, updated, and growing.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mt-14 max-w-4xl">
            {MAINTENANCE.map((m, i) => (
              <Reveal key={m.tag} delay={i * 0.08}>
                <div className={`h-full p-8 lg:p-10 border ${m.accent ? "border-accent bg-foreground text-background" : "border-border bg-background"}`}>
                  <div className="flex items-baseline justify-between mb-4">
                    <p className={`text-[10px] tracking-[0.3em] uppercase ${m.accent ? "text-highlight" : "text-accent"}`}>{m.tag}</p>
                    <span className={`text-xs ${m.accent ? "text-background/60" : "text-muted-foreground"}`}>{m.jp}</span>
                  </div>
                  {m.accent ? (
                    <TrendingUp className="h-7 w-7 text-highlight mb-4" strokeWidth={1.5} />
                  ) : (
                    <Wrench className="h-7 w-7 text-accent mb-4" strokeWidth={1.5} />
                  )}
                  <p className={`text-sm mb-6 ${m.accent ? "text-background/70" : "text-muted-foreground"}`}>{m.desc}</p>
                  <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-current/10">
                    <span className={`font-display text-3xl ${m.accent ? "text-highlight" : ""}`}>{m.price}</span>
                    <span className={`text-xs ${m.accent ? "text-background/60" : "text-muted-foreground"}`}>{m.period}</span>
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
                    <Link to="/contact">Subscribe <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-highlight mb-6">Get started</p>
          <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight text-balance">
            あなたのビジネスを、より強く、オンラインへ。
          </h2>
          <p className="mt-6 text-accent-foreground/80 max-w-2xl mx-auto">
            Free initial consultation — no obligation. We respond within one business day, in Japanese or English.
          </p>
          <Button asChild size="lg" className="mt-10 bg-highlight text-highlight-foreground hover:bg-highlight/90 rounded-none h-14 px-10">
            <Link to="/contact">初回相談 無料 — Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}