import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles, Code2, Megaphone, Palette } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Akino Group Co., Ltd." },
      { name: "description", content: "Cleaning, web development, social media management, and digital business support — by Akino Group, Tokyo." },
      { property: "og:title", content: "Services — Akino Group" },
      { property: "og:description", content: "Four professional disciplines, delivered with Japanese precision." },
    ],
  }),
});

const SERVICES = [
  {
    icon: Sparkles, num: "01", jp: "清掃サービス",
    title: "Cleaning Services",
    desc: "From daily office maintenance to specialized facility cleaning, we apply the discipline of Japanese hospitality to every space we touch.",
    benefits: ["Trained, vetted, uniformed staff", "Eco-friendly products", "Flexible scheduling — daily to monthly"],
    features: ["Office & co-working spaces", "Retail & showrooms", "Post-construction cleanup", "Window & deep cleaning"],
    price: "From ¥30,000 / month",
  },
  {
    icon: Code2, num: "02", jp: "Web制作",
    title: "Website Development",
    desc: "Modern, fast, and maintainable websites built with React, TypeScript, and best-in-class tooling — bilingual where needed.",
    benefits: ["Mobile-first responsive design", "SEO-ready architecture", "Lightning-fast performance"],
    features: ["Corporate websites", "E-commerce", "Landing pages", "CMS & integrations"],
    price: "From ¥350,000 / project",
  },
  {
    icon: Megaphone, num: "03", jp: "SNS運用",
    title: "Social Media Management",
    desc: "Content, strategy, and community across Instagram, X, LINE, and TikTok — tuned for the Japanese market and beyond.",
    benefits: ["Bilingual content production", "Monthly performance reports", "Influencer & creator network"],
    features: ["Content calendar", "Photo & short-form video", "Community management", "Paid social campaigns"],
    price: "From ¥80,000 / month",
  },
  {
    icon: Palette, num: "04", jp: "ブランド & デジタル支援",
    title: "Branding & Digital Support",
    desc: "Identity, guidelines, and the operational digital tools your team relies on — implemented end-to-end.",
    benefits: ["Cohesive brand systems", "Print + digital ready", "Ongoing partnership"],
    features: ["Logo & visual identity", "Brand guidelines", "Marketing collateral", "Workflow tooling"],
    price: "From ¥150,000 / project",
  },
];

function Services() {
  return (
    <>
      <PageHeader
        kicker="Services — サービス"
        title={<>Four disciplines. <em className="not-italic text-accent">One standard.</em></>}
        sub="Choose a single service or combine them — every engagement is led by senior practitioners and held to the same level of care."
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 space-y-32">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title}>
            <section className={`grid lg:grid-cols-12 gap-12 items-start ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end p-8">
                    <span className="font-display text-[12rem] leading-none text-foreground/5">{s.num}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <s.icon className="h-24 w-24 text-accent/40" strokeWidth={1} />
                  </div>
                  <div className="absolute top-6 left-6 text-xs tracking-widest text-muted-foreground">{s.jp}</div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{s.num} — Service</p>
                <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">{s.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{s.desc}</p>

                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-3 text-sm"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">What's included</h3>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-3 text-sm"><span className="h-1 w-1 rounded-full bg-accent mt-2" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground">Starting at</p>
                    <p className="font-display text-2xl">{s.price}</p>
                  </div>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-12 px-6 ml-auto">
                    <Link to="/contact">Request quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}