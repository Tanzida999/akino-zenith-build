import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Globe2, Users, Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Akino Group — Professional Business Solutions in Japan" },
      { name: "description", content: "Cleaning, web development, social media, and digital business support from a trusted Saitama Kabushiki Kaisha." },
      { property: "og:title", content: "Akino Group — Saitama, Japan" },
      { property: "og:description", content: "Reliable cleaning, web development, and digital services for modern businesses." },
    ],
  }),
});

function Index() {
  const { t } = useI18n();
  const services = [
    { img: slide1, kicker: t("hero.s1.kicker"), title: t("hero.s1.title"), sub: t("hero.s1.sub") },
    { img: slide2, kicker: t("hero.s2.kicker"), title: t("hero.s2.title"), sub: t("hero.s2.sub") },
    { img: slide3, kicker: t("hero.s3.kicker"), title: t("hero.s3.title"), sub: t("hero.s3.sub") },
    { img: slide1, kicker: t("hero.s4.kicker"), title: t("hero.s4.title"), sub: t("hero.s4.sub") },
  ];
  const slides = services.map((s) => s.img);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % services.length), 4500);
    return () => clearInterval(id);
  }, [services.length]);
  const current = services[active];
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              width={1600}
              height={1067}
              className="absolute inset-0 w-full h-full object-cover"
              initial={false}
              animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1.03 : 1 }}
              transition={{ opacity: { duration: 1.2 }, scale: { duration: 6, ease: "linear" } }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
        <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 vrl text-xs tracking-[0.4em] text-muted-foreground">
          {t("hero.vrl")}
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 w-full">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" /> {t("hero.banner")}
          </p>
          <motion.p
            key={`kicker-${active}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.35em] uppercase text-highlight mb-6"
          >
            {current.kicker}
          </motion.p>
          <motion.h1
            key={`title-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[1.05] max-w-5xl text-balance"
          >
            {current.title}
          </motion.h1>
          <motion.p
            key={`sub-${active}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {current.sub}
          </motion.p>
          <p className="mt-4 text-sm md:text-base text-foreground/70 max-w-2xl">
            {t("hero.tagline")}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-none h-14 px-8 shadow-[var(--shadow-glow)]">
              <Link to="/contact">{t("hero.cta1")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 border-foreground/20 hover:bg-foreground hover:text-background">
              <Link to="/services">{t("hero.cta2")}</Link>
            </Button>
          </motion.div>
          {/* Slide indicators */}
          <div className="mt-16 flex items-center gap-3">
            {services.map((s, i) => (
              <button
                key={s.kicker}
                onClick={() => setActive(i)}
                aria-label={s.title}
                className={`h-px transition-all ${active === i ? "w-12 bg-accent" : "w-6 bg-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("home.services.kicker")}</p>
            <h2 className="text-4xl md:text-5xl font-display font-medium max-w-2xl text-balance">{t("home.services.title")}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px mt-16 bg-border">
            {[
              { title: t("home.svc.cleaning"), jp: t("home.svc.cleaning.jp"), desc: t("home.svc.cleaning.desc") },
              { title: t("home.svc.web"), jp: t("home.svc.web.jp"), desc: t("home.svc.web.desc") },
              { title: t("home.svc.sns"), jp: t("home.svc.sns.jp"), desc: t("home.svc.sns.desc") },
              { title: t("home.svc.digital"), jp: t("home.svc.digital.jp"), desc: t("home.svc.digital.desc") },
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
                    {t("home.svc.learn")} <ArrowRight className="h-3 w-3" />
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
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("home.why.kicker")}</p>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-balance leading-tight">{t("home.why.title")}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t("home.why.sub")}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: t("home.why.f1.title"), desc: t("home.why.f1.desc") },
              { icon: Sparkles, title: t("home.why.f2.title"), desc: t("home.why.f2.desc") },
              { icon: Globe2, title: t("home.why.f3.title"), desc: t("home.why.f3.desc") },
              { icon: Users, title: t("home.why.f4.title"), desc: t("home.why.f4.desc") },
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
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("home.work.kicker")}</p>
                <h2 className="text-4xl md:text-5xl font-display font-medium">{t("home.work.title")}</h2>
              </div>
              <Link to="/portfolio" className="text-sm tracking-wide inline-flex items-center gap-2 hover:text-accent">
                {t("home.work.view")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: t("pf.cat.web"), title: t("pf.p1.title"), num: "01", img: proj1 },
              { tag: t("pf.cat.cleaning"), title: t("pf.p2.title"), num: "02", img: proj2 },
              { tag: t("pf.cat.social"), title: t("pf.p3.title"), num: "03", img: proj3 },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-secondary relative overflow-hidden mb-4">
                    <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1280}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-background">
                      <span className="font-display text-2xl">{p.title}</span>
                      <span className="font-display text-3xl opacity-70">{p.num}</span>
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
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{t("home.voices.kicker")}</p>
            <h2 className="text-4xl md:text-5xl font-display font-medium max-w-2xl mb-16">{t("home.voices.title")}</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: t("home.voices.q1"), name: t("home.voices.r1").split(" — ")[0], role: t("home.voices.r1").split(" — ")[1] ?? "" },
              { quote: t("home.voices.q2"), name: t("home.voices.r2").split(" — ")[0], role: t("home.voices.r2").split(" — ")[1] ?? "" },
              { quote: t("home.voices.q3"), name: t("home.voices.r3").split(" — ")[0], role: t("home.voices.r3").split(" — ")[1] ?? "" },
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
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-6">{t("home.cta.kicker")}</p>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-balance leading-tight">{t("home.cta.title")}</h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">{t("home.cta.sub")}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-highlight hover:bg-highlight/90 text-highlight-foreground rounded-none h-14 px-8">
                <Link to="/contact">{t("hero.cta1")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8">
                <Link to="/services">{t("home.cta.browse")}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
