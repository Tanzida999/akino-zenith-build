import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "お問い合わせ — 株式会社アキノグループ" },
      { name: "description", content: "埼玉のアキノグループへお問い合わせ。日本語・英語で無料相談を承ります。" },
    ],
  }),
});

function Contact() {
  const { t } = useI18n();
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const schema = z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[+()\d\s-]+$/, "Please enter a valid phone number");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(phone);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We will call you back within 1 business day.");
      setPhone("");
      setSubmitting(false);
    }, 700);
  };

  return (
    <>
      <Toaster />
      <PageHeader
        kicker={t("ct.kicker")}
        title={<>{t("ct.title.a")}<em className="not-italic text-accent">{t("ct.title.b")}</em>{t("ct.title.c")}</>}
        sub={t("ct.sub")}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} className="bg-background border border-border p-8 lg:p-10 shadow-[var(--shadow-soft)] space-y-6">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">Free Consultation</p>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Leave your number — we'll call you.</h2>
                <p className="text-sm text-muted-foreground">Drop your phone number below. One of our specialists will call you back within 1 business day to discuss your project.</p>
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs tracking-widest uppercase text-muted-foreground">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+81 90-0000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-accent px-0 text-lg h-12"
                />
              </div>
              <Button type="submit" disabled={submitting} className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-14 px-8 w-full sm:w-auto">
                {submitting ? "Sending…" : "Request a callback"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-8">
            <div className="bg-foreground text-background p-8">
              <p className="text-xs tracking-widest uppercase text-accent mb-6">{t("ct.direct")}</p>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-4"><MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span>〒344-0124 埼玉県春日部市せんげん台 1-129</span></li>
                <li className="flex gap-4"><Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" /><a href="mailto:info@akino-group.jp" className="hover:text-accent">info@akino-group.jp</a></li>
                <li className="flex gap-4"><Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" /><a href="tel:+81300000000" className="hover:text-accent">+81 3-0000-0000</a></li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a href="https://wa.me/81300000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white p-4 hover:opacity-90 transition-opacity text-sm font-medium">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#06C755] text-white p-4 hover:opacity-90 transition-opacity text-sm font-medium">
                <MessageCircle className="h-4 w-4" /> LINE
              </a>
            </div>

            <div className="aspect-[4/3] border border-border relative overflow-hidden">
              <iframe
                title="Akino Group Office"
                src="https://www.google.com/maps?q=Sengendai+1-129,+Kasukabe-shi,+Saitama&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-110"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
