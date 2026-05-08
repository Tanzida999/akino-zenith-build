import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Compass, Heart, Mountain, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Akino Group Co., Ltd." },
      { name: "description", content: "Learn about Akino Group, a Tokyo-based Kabushiki Kaisha dedicated to professional cleaning, web development, and digital services." },
      { property: "og:title", content: "About Akino Group" },
      { property: "og:description", content: "Our mission, values, and the team behind Akino Group." },
    ],
  }),
});

function About() {
  return (
    <>
      <PageHeader
        kicker="About — 会社概要"
        title={<>A Japanese company built on <em className="not-italic text-accent">trust</em>.</>}
        sub="Akino Group Co., Ltd. (株式会社アキノグループ) was founded in Tokyo to bring craft, clarity, and consistency to the services modern businesses depend on every day."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">Mission</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-6">
              To raise the standard of everyday business — from the floors people walk on to the screens they work behind.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe quality is not a milestone but a habit. Every project, regardless of size, is delivered with the same intention: care, precision, and a quiet pride in the work.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">Vision</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-6">
              The most trusted multi-service partner for businesses operating in Japan.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By 2030, Akino Group aims to support over 1,000 businesses across Japan with integrated cleaning, digital, and operational services — bridging tradition and technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">Values</p>
            <h2 className="text-4xl font-display font-medium mb-16 max-w-2xl">Four principles guide every decision.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, jp: "誠実", title: "Sincerity", desc: "We do what we say, on time, every time." },
              { icon: Mountain, jp: "品質", title: "Craft", desc: "Excellence in details others overlook." },
              { icon: Compass, jp: "挑戦", title: "Curiosity", desc: "We keep learning so our clients lead." },
              { icon: Target, jp: "結果", title: "Outcomes", desc: "We measure ourselves by your success." },
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

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">Story — 沿革</p>
            <h2 className="text-4xl font-display font-medium mb-16">From a small Tokyo office to a multi-service group.</h2>
          </Reveal>
          <div className="space-y-12 relative before:content-[''] before:absolute before:left-24 before:top-2 before:bottom-2 before:w-px before:bg-border">
            {[
              { year: "2018", title: "Founded in Tokyo", desc: "Akino Group is established as a Kabushiki Kaisha focused on commercial cleaning." },
              { year: "2020", title: "Digital Division", desc: "Web development and social media services are added to serve evolving client needs." },
              { year: "2022", title: "Bilingual Operations", desc: "Expanded to fully bilingual operations to support international businesses in Japan." },
              { year: "2024", title: "Integrated Services", desc: "Unified offering across cleaning, web, and digital — one trusted partner for modern teams." },
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

      {/* Team */}
      <section className="py-24 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">Team — チーム</p>
            <h2 className="text-4xl font-display font-medium mb-16">Quietly excellent people.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Akino Hiroshi", role: "Representative Director", jp: "代表取締役" },
              { name: "Sato Yuki", role: "Head of Operations", jp: "執行役員" },
              { name: "Tanaka Mei", role: "Lead Developer", jp: "リードエンジニア" },
              { name: "Yamada Ren", role: "Brand & Social", jp: "ブランド戦略" },
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