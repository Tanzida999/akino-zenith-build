import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "お問い合わせ — 株式会社アキノグループ" },
      { name: "description", content: "東京・埼玉のアキノグループへお問い合わせ。日本語・英語で無料相談を承ります。" },
    ],
  }),
});

function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1, t("ct.err.name")).max(100),
    email: z.string().trim().email(t("ct.err.email")).max(255),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    service: z.string().min(1, t("ct.err.service")),
    message: z.string().trim().min(1, t("ct.err.message")).max(1000),
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t("ct.toast.success"));
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
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
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground">{t("ct.name")}</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-accent px-0" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground">{t("ct.email")}</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-accent px-0" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs tracking-widest uppercase text-muted-foreground">{t("ct.phone")}</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-accent px-0" />
                </div>
                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground">{t("ct.service")}</Label>
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger className="mt-2 rounded-none border-0 border-b border-border focus:ring-0 px-0">
                      <SelectValue placeholder={t("ct.service.placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cleaning">{t("ct.svc.cleaning")}</SelectItem>
                      <SelectItem value="web">{t("ct.svc.web")}</SelectItem>
                      <SelectItem value="social">{t("ct.svc.social")}</SelectItem>
                      <SelectItem value="branding">{t("ct.svc.branding")}</SelectItem>
                      <SelectItem value="other">{t("ct.svc.other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground">{t("ct.message")}</Label>
                <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 rounded-none border-0 border-b border-border focus-visible:ring-0 focus-visible:border-accent px-0 resize-none" />
              </div>
              <Button type="submit" disabled={submitting} className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-14 px-8 w-full sm:w-auto">
                {submitting ? t("ct.sending") : t("ct.send")} <ArrowRight className="ml-2 h-4 w-4" />
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
