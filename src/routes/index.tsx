import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Globe2, Users, Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Akino Group — Professional Business Solutions in Japan" },
      { name: "description", content: "Cleaning, web development, social media, and digital business support from a trusted Tokyo Kabushiki Kaisha." },
      { property: "og:title", content: "Akino Group — Tokyo, Japan" },
      { property: "og:description", content: "Reliable cleaning, web development, and digital services for modern businesses." },
    ],
  }),
});

function Index() {
  const { t } = useI18n();
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1280} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        </div>
        <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 vrl text-xs tracking-[0.4em] text-muted-foreground">
          株式会社アキノグループ — TOKYO
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.35em] uppercase text-accent mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-accent" /> {t("hero.kicker")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.05] max-w-5xl text-balance"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {t("hero.sub")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-14 px-8 shadow-[var(--shadow-glow)]">
              <Link to="/contact">{t("hero.cta1")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 border-foreground/20 hover:bg-foreground hover:text-background">
              <Link to="/contact">{t("hero.cta2")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">01 — Services</p>
            <h2 className="text-4xl md:text-5xl font-display font-medium max-w-2xl text-balance">
              Four disciplines, one standard of excellence.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px mt-16 bg-border">
            {[
              { title: "Cleaning Services", jp: "清掃サービス", desc: "Office, retail, and facility cleaning held to omotenashi standards." },
              { title: "Website Development", jp: "Web制作", desc: "Bespoke, fast, and accessible sites built with modern tooling." },
              { title: "Social Media", jp: "SNS運用", desc: "Strategy, content, and community across Japan and global audiences." },
              { title: "Digital Support", jp: "デジタル支援", desc: "Branding, ads, and operational digital tools for growing teams." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="bg-background p-8 lg:p-10 h-full group hover:bg-secondary transition-colors">
                  <div className="flex items-baseline justify-between mb-8">
                    <span className="text-xs tracking-widest text-muted-foreground">0{i + 1}</span>
                    <span className="text-xs tracking-widest text-muted-foreground">{s.jp}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
                  <Link to="/services" className="text-xs tracking-widest uppercase inline-flex items-center gap-2 group-hover:text-accent transition-colors">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">02 — Why Akino</p>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-balance leading-tight">
              Japanese precision, applied to every project.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We blend the discipline of traditional Japanese craft with modern execution. Every engagement is treated with the same attention — whether it's a polished floor or a polished interface.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Trusted KK", desc: "Registered Kabushiki Kaisha with full compliance." },
              { icon: Sparkles, title: "Premium Quality", desc: "Senior craftsmen and developers on every job." },
              { icon: Globe2, title: "Bilingual Team", desc: "Communication in Japanese and English." },
              { icon: Users, title: "Long-Term Partner", desc: "We grow with you, not just deliver to you." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="bg-background p-6 border border-border shadow-[var(--shadow-soft)] h-full">
                  <f.icon className="h-5 w-5 text-accent mb-4" />
                  <h3 className="font-medium mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">03 — Selected Work</p>
                <h2 className="text-4xl md:text-5xl font-display font-medium">Recent engagements</h2>
              </div>
              <Link to="/portfolio" className="text-sm tracking-wide inline-flex items-center gap-2 hover:text-accent">
                View portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Web", title: "Mori Architects", num: "01" },
              { tag: "Cleaning", title: "Shibuya Tower", num: "02" },
              { tag: "Social", title: "Sakura Cafe", num: "03" },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted relative overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-end p-6">
                      <span className="vrl text-[10rem] font-display text-foreground/5 leading-none">{p.num}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-3xl text-foreground/40 group-hover:text-accent transition-colors">{p.title}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs tracking-widest uppercase text-muted-foreground">
                    <span>{p.tag}</span><span>2024</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">04 — Voices</p>
            <h2 className="text-4xl md:text-5xl font-display font-medium max-w-2xl mb-16">What partners say.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Akino transformed how our office feels — every detail considered.", name: "T. Yamada", role: "COO, Mori Architects" },
              { quote: "Our website finally reflects the brand we worked years to build.", name: "K. Sato", role: "Founder, Sakura Cafe" },
              { quote: "Reliable, punctual, and quietly excellent. The Japanese way.", name: "M. Tanaka", role: "GM, Shibuya Tower" },
            ].map((tt, i) => (
              <Reveal key={tt.name} delay={i * 0.08}>
                <div className="border border-background/10 p-8 h-full backdrop-blur">
                  <Quote className="h-6 w-6 text-accent mb-6" />
                  <p className="text-lg leading-relaxed mb-8 font-display">"{tt.quote}"</p>
                  <div className="flex gap-1 mb-3">{[...Array(5)].map((_, k) => <Star key={k} className="h-3 w-3 fill-accent text-accent" />)}</div>
                  <p className="text-sm font-medium">{tt.name}</p>
                  <p className="text-xs text-background/60">{tt.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-6">05 — Begin</p>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-balance leading-tight">
              Ready to elevate your business in Japan?
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              A 30-minute consultation to understand your needs — at no cost, in English or Japanese.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-14 px-8">
                <Link to="/contact">{t("hero.cta1")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8">
                <Link to="/services">Browse Services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
