import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
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
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border/60">
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
          <button
            onClick={() => setLang(lang === "en" ? "ja" : "en")}
            className="text-xs tracking-widest font-medium px-2 py-1 rounded border border-border hover:border-accent hover:text-accent transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "JA" : "EN"}
          </button>
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