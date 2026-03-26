"use client";

import EventsSection from "@/components/EventsSection";
import { Baby, User, Users, Star, ShieldCheck, Clock, HelpCircle, GraduationCap, Briefcase, Ruler, Cake } from "lucide-react";
import preiseHeroBg from "@/assets/preise-hero-bg.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/i18n/LanguageContext";

const priceIcons = [Baby, User, Users];

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

const WavyTop = ({ fill }: { fill: string }) => (
  <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
    <svg viewBox="0 0 1440 60" className="w-full h-auto">
      <path d="M0,0 L1440,0 L1440,20 C1080,60 720,0 360,40 C180,55 0,30 0,20 Z" fill={fill} />
    </svg>
  </div>
);



const groupOffers = [
  {
    icon: Users,
    title: "Familienkarte",
    price: "99 €",
    description: "2 Erwachsene + bis zu 2 Kinder. Einmaliger Besuch, alle Parcours inklusive.",
  },
  {
    icon: GraduationCap,
    title: "Schulklassen",
    price: "23 € p.P.",
    description: "Sondertarif für Schulklassen. Sicherheitsausrüstung und Einweisung inklusive.",
  },
  {
    icon: Briefcase,
    title: "Teamevents",
    price: "ab 28 € p.P.",
    description: "Ab 10 Teilnehmern. Ideal für Firmen, Vereine und Teambuilding.",
  },
];

const additionalOffers = [
  {
    icon: Star,
    title: "Schatzsuche",
    price: "65 €",
    description: "Perfekt für Geburtstage etc. Preis zzgl. Eintrittstickets.",
  },
];

const faqs = [
  {
    question: "Was ist im Preis enthalten?",
    answer: "Im Eintrittspreis enthalten sind: Sicherheitsausrüstung (Klettergurt, Helm, Handschuhe), Sicherheitseinweisung (ca. 30 Min.), Zugang zu den freigegebenen Parcours.",
  },
  {
    question: "Gibt es Ermäßigungen?",
    answer: "Ja! Gruppenrabatt ab 20 Personen (2 € Ermäßigung p.P.), Saisonkarten für Vielkletterer und spezielle Familienkarten. Inhaber der Schwarzwald-Card erhalten 10% Rabatt.",
  },
  {
    question: "Kann ich vor Ort bezahlen?",
    answer: "Ja, wir akzeptieren Barzahlung, EC-Karte und Kreditkarte. Bei Online-Reservierung ist keine Vorauszahlung nötig – bezahlt wird vor Ort.",
  },
  {
    question: "Gibt es eine Alters- oder Größenbeschränkung?",
    answer: "Kinder ab 6 Jahren und mindestens 120 cm Körpergröße dürfen auf den Kinderparcours. Ab 140 cm sind alle Parcours zugänglich. Kinder unter 12 müssen von einem Erwachsenen begleitet werden.",
  },
  {
    question: "Brauche ich eine Einverständniserklärung?",
    answer: "Ja, jeder Gast muss vor dem Klettern eine ausgefüllte Einverständniserklärung abgeben. Bei Minderjährigen muss diese von einem Erziehungsberechtigten unterschrieben sein. Sie können das Formular vorab als PDF herunterladen und ausgefüllt mitbringen.",
  },
];

const Preise = () => {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <img src={preiseHeroBg.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 to-primary/60" />
        <WavyBottom fill="hsl(40 33% 96%)" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-amber-light text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Preise & Tickets
          </span>
          <h1 className="text-4xl sm:text-5xl text-primary-foreground mb-4">
            Faire Preise für jedes Abenteuer
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-6">
            Alle Preise beinhalten Sicherheitsausrüstung, professionelle Einweisung und 3 Stunden Kletterzeit.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Jetzt buchen</a>
          </Button>
        </div>
      </section>

      {/* Preiskarten */}
      <section className="relative overflow-hidden py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto md:justify-center">
            {t.preise.categories.map((p, i) => {
              const Icon = priceIcons[i];
              return (
                <Card
                  key={i}
                  className="relative text-center hover:shadow-xl transition-all duration-300 min-w-[260px] flex-shrink-0 md:flex-shrink md:min-w-0 md:flex-1 border-border"
                >
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Fredoka One', cursive" }}>
                      {p.category}
                    </h3>
                    <div className="flex flex-col items-center gap-2 mb-4">
                      {p.height && (
                        <span className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-semibold">
                          <Ruler className="h-3.5 w-3.5" />
                          {p.height}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-semibold">
                        <Cake className="h-3.5 w-3.5" />
                        {p.ageReq}
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
                      {p.price}
                    </div>
                    <p className="text-muted-foreground text-xs">{p.note}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
            {t.preise.hint}
          </p>
          <div className="text-center mt-6">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.preise.link || "Jetzt reservieren"}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Gruppen-Angebote */}
      <section className="relative overflow-hidden py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-3">Gruppen-Angebote</h2>
            <p className="text-muted-foreground text-lg">Spezielle Angebote für Familien und Vielkletterer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {groupOffers.map((e) => (
              <a
                key={e.title}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              >
                <Card className="relative text-center hover:shadow-lg hover:border-primary transition-all h-full">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                      <e.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{e.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-3">{e.price}</div>
                    <p className="text-muted-foreground text-sm">{e.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Jetzt reservieren</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Inklusive */}
      <section className="relative overflow-hidden py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-foreground mb-3">Im Preis enthalten</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, text: "Komplette Sicherheitsausrüstung" },
              { icon: Clock, text: "Ca. 30 Min. Sicherheitseinweisung" },
              { icon: Clock, text: "3 Stunden Kletterzeit" },
              { icon: HelpCircle, text: "Betreuung durch geschultes Personal*" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-foreground font-semibold text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            * Keine geführte Tour – unsere Mitarbeiter betreuen euch vom Boden aus.
          </p>

          {/* Einverständniserklärung Hinweis */}
          <div className="mt-8 bg-accent/10 border border-accent/30 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-foreground font-semibold text-sm mb-1">Einverständniserklärung erforderlich</p>
              <p className="text-muted-foreground text-xs">
                Bitte bringen Sie eine ausgefüllte Einverständniserklärung mit. Bei Minderjährigen muss diese von einem Erziehungsberechtigten unterschrieben sein.
              </p>
            </div>
            <a
              href="/documents/einverstaendniserklaerung.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              PDF herunterladen
            </a>
          </div>
        </div>
      </section>

      {/* Zusatzangebote */}
      <section className="relative overflow-hidden py-16 bg-secondary/50">
        <WavyTop fill="hsl(145 25% 88% / 0.5)" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-3">Zusatzangebote</h2>
            <p className="text-muted-foreground text-lg">Erlebnisse für besondere Anlässe</p>
          </div>
          <div className="max-w-sm mx-auto">
            {additionalOffers.map((e) => (
              <a
                key={e.title}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.03] block"
              >
                <Card className="relative text-center hover:shadow-lg hover:border-primary transition-all h-full">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                      <e.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{e.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-3">{e.price}</div>
                    <p className="text-muted-foreground text-sm">{e.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Gruppen */}
      <EventsSection />

      {/* FAQ */}
      <section className="relative overflow-hidden py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-foreground mb-3">Häufige Fragen zu Preisen</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-foreground mb-4">Bereit für dein Abenteuer?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Sichere dir jetzt deinen Platz im Kletterwald Staufen – Vorab-Reservierung empfohlen!
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Jetzt reservieren</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Preise;
