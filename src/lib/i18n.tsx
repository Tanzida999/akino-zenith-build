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
  "hero.kicker": "Kabushiki Kaisha · Japan",
  "hero.title": "Professional Business Solutions in Japan",
  "hero.sub": "Reliable Cleaning, Web Development, and Digital Services for Modern Businesses.",
  "hero.cta1": "Get Free Consultation",
  "hero.cta2": "Contact Us",
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
  "hero.kicker": "株式会社 · 日本",
  "hero.title": "日本のビジネスを支える、確かなプロフェッショナル",
  "hero.sub": "清掃・Web制作・デジタル支援を、信頼の品質でご提供します。",
  "hero.cta1": "無料相談を申し込む",
  "hero.cta2": "お問い合わせ",
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