import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeader({ kicker, title, sub }: { kicker: string; title: ReactNode; sub?: string }) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.35em] uppercase text-accent mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" /> {kicker}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-medium leading-[1.05] text-balance max-w-4xl">
          {title}
        </motion.h1>
        {sub && (
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{sub}</motion.p>
        )}
      </div>
    </section>
  );
}