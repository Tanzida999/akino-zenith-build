import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/portfolio", label: t("nav.portfolio") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-highlight text-highlight-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-9 flex items-center justify-center gap-3 text-[11px] sm:text-xs tracking-widest uppercase font-medium">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{t("promo.label")}</span>
          <span>{t("promo.off")}</span>
          <span className="opacity-70">|</span>
          <Link to="/contact" className="underline underline-offset-4 hover:opacity-80">{t("promo.free")}</Link>
        </div>
      </div>
      <div className="glass border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-7 w-1 bg-accent rounded-full" />
          <span className="font-display text-lg tracking-[0.2em] font-semibold">AKINO</span>
          <span className="text-xs tracking-[0.3em] text-muted-foreground">GROUP</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "text-sm tracking-wide transition-colors relative py-1",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                {active && <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded border border-border overflow-hidden text-[11px] tracking-widest font-semibold" role="group" aria-label="Language">
            <button
              onClick={() => setLang("ja")}
              className={cn("px-2 py-1 transition-colors", lang === "ja" ? "bg-foreground text-background" : "hover:text-accent")}
              aria-pressed={lang === "ja"}
            >JP</button>
            <button
              onClick={() => setLang("en")}
              className={cn("px-2 py-1 transition-colors border-l border-border", lang === "en" ? "bg-foreground text-background" : "hover:text-accent")}
              aria-pressed={lang === "en"}
            >EN</button>
          </div>
          <button
            onClick={toggle}
            className="p-2 rounded hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button asChild size="sm" className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">{t("nav.cta")}</Link>
          </Button>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm tracking-wide text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}