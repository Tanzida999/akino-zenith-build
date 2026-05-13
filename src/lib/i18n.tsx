import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ja";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.portfolio": "Portfolio",
  "nav.contact": "Contact",
  "nav.cta": "Free Consultation",
  "hero.kicker": "Kabushiki Kaisha · Tokyo",
  "hero.title": "Make your business stronger — online.",
  "hero.sub": "Web design, e-commerce, social media, and digital support — built with Japanese precision for businesses ready to grow.",
  "hero.cta1": "Free Initial Consultation",
  "hero.cta2": "View Pricing",
  "footer.tag": "Crafted with precision in Tokyo, Japan.",
  "footer.rights": "All rights reserved.",
};

const ja: Dict = {
  "nav.home": "ホーム",
  "nav.about": "会社概要",
  "nav.services": "サービス",
  "nav.portfolio": "実績",
  "nav.contact": "お問い合わせ",
  "nav.cta": "無料相談",
  "hero.kicker": "株式会社 · 東京",
  "hero.title": "あなたのビジネスを、より強く、オンラインへ。",
  "hero.sub": "Web制作・ECサイト・SNS運用・デジタル支援を、日本品質でご提供します。",
  "hero.cta1": "初回相談 無料",
  "hero.cta2": "料金を見る",
  "footer.tag": "東京から、誠実なものづくりを。",
  "footer.rights": "All rights reserved.",
};

const dicts: Record<Lang, Dict> = { en, ja };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const I18nCtx = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "ja") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);