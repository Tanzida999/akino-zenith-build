import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-7 w-1 bg-accent rounded-full" />
            <span className="font-display text-lg tracking-[0.2em] font-semibold">AKINO GROUP</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            株式会社アキノグループ — A Tokyo-based Kabushiki Kaisha delivering cleaning, web, and digital services to modern businesses.
          </p>
          <p className="text-xs text-muted-foreground mt-4 italic">{t("footer.tag")}</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>〒100-0001 Tokyo, Japan</li>
            <li>info@akino-group.jp</li>
            <li>+81 3-0000-0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-muted-foreground">
          <div className="flex flex-col gap-1">
            <p className="font-display italic tracking-wide text-[13px] text-foreground/70">Designed by Akino Group</p>
            <p>© {new Date().getFullYear()} Akino Group Co., Ltd. {t("footer.rights")}</p>
          </div>
          <p className="tracking-widest">株式会社アキノグループ</p>
        </div>
      </div>
    </footer>
  );
}