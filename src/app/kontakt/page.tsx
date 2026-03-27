"use client";

import { useState, useMemo } from "react";
import { MapPin, Phone, Mail, Send, TreePine, TrainFront } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Link from "next/link";
import preiseHeroBg from "@/assets/hero-bg-2.jpg";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/i18n/LanguageContext";

const WavyBottom = ({ fill }: { fill: string }) => (
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" className="w-full h-auto">
      <path
        d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  </div>
);

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
}

const Kontakt = () => {
  const { t } = useLanguage();
  const [captcha, setCaptcha] = useState(generateCaptcha);

  const contactInfo = [
    { icon: MapPin, label: t.kontaktPage.contactInfo[0].label, value: t.kontaktPage.contactInfo[0].value, href: undefined },
    { icon: Phone, label: t.kontaktPage.contactInfo[1].label, value: t.kontaktPage.contactInfo[1].value, href: "tel:+497633123456" },
    { icon: Mail, label: t.kontaktPage.contactInfo[2].label, value: t.kontaktPage.contactInfo[2].value, href: "mailto:info@kletterwald-staufen.de" },
    { icon: TrainFront, label: t.kontaktPage.contactInfo[3].label, value: t.kontaktPage.contactInfo[3].value, href: undefined },
  ];

  const formSchema = useMemo(() => z.object({
    name: z.string().trim().min(2, "Mindestens 2 Zeichen").max(100, "Maximal 100 Zeichen"),
    email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein").max(255),
    betreff: z.string().trim().min(2, "Mindestens 2 Zeichen").max(100, "Maximal 100 Zeichen"),
    nachricht: z.string().trim().min(10, "Mindestens 10 Zeichen").max(1000, "Maximal 1000 Zeichen"),
    captchaAnswer: z.string().min(1, t.kontaktPage.captchaLabel).refine(
      (val) => parseInt(val, 10) === captcha.answer,
      t.kontaktPage.wrongAnswer
    ),
    datenschutz: z.literal(true, { errorMap: () => ({ message: t.kontaktPage.acceptPrivacy }) }),
  }), [captcha.answer, t]);

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", betreff: "", nachricht: "", captchaAnswer: "", datenschutz: undefined as unknown as true },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Kontaktformular abgesendet:", data);
    toast.success(t.kontaktPage.successTitle, {
      description: t.kontaktPage.successDescription,
    });
    form.reset();
    setCaptcha(generateCaptcha());
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <img src={preiseHeroBg.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 to-primary/60" />
        <WavyBottom fill="hsl(40 33% 96%)" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-amber-light text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            {t.kontaktPage.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl text-primary-foreground mb-4">
            {t.kontaktPage.title}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            {t.kontaktPage.description}
          </p>
        </div>
      </section>

      {/* Kontaktformular + Infos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Formular */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-2xl">{t.kontaktPage.formTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.kontaktPage.name}</FormLabel>
                            <FormControl>
                              <Input placeholder={t.kontaktPage.namePlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.kontaktPage.email}</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={t.kontaktPage.emailPlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="betreff"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.kontaktPage.subject}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.kontaktPage.subjectPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nachricht"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.kontaktPage.message}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t.kontaktPage.messagePlaceholder} rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Captcha */}
                    <FormField
                      control={form.control}
                      name="captchaAnswer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.kontaktPage.captchaLabel} {captcha.question} = ?</FormLabel>
                          <FormControl>
                            <Input placeholder={t.kontaktPage.captchaPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Datenschutz */}
                    <FormField
                      control={form.control}
                      name="datenschutz"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value === true}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              {t.kontaktPage.privacyText}{" "}
                              <Link href="/datenschutz" className="text-primary underline hover:text-primary/80">
                                {t.kontaktPage.privacyLink}
                              </Link>{" "}
                              {t.kontaktPage.privacyEnd}
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full sm:w-auto">
                      <Send className="h-4 w-4 mr-2" />
                      {t.kontaktPage.send}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Kontaktdaten */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">{t.kontaktPage.contactTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              title={t.kontaktPage.mapTitle}
              src="https://maps.google.com/maps?q=Kletterwald+Staufen&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <TreePine className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl text-foreground mb-4">{t.kontaktPage.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            {t.kontaktPage.ctaDescription}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.kontaktPage.ctaButton}</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
