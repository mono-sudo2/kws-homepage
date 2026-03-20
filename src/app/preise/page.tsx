"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventsSection from "@/components/EventsSection";
import { Baby, User, Users, Star, ShieldCheck, Clock, HelpCircle, Ticket } from "lucide-react";
import preiseHeroBg from "@/assets/preise-hero-bg.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

// Reusable wave components
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

const prices = [
  {
    icon: Baby,
    category: "Kinder",
    age: "6–13 Jahre",
    price: "19 €",
    note: "Kinderparcours inkl.",
    highlight: false,
    details: "Zugang zu Kinderparcours & Einsteigerparcours. Kinder unter 14 Jahren nur in Begleitung eines Erwachsenen.",
  },
  {
    icon: User,
    category: "Jugendliche",
    age: "14–17 Jahre",
    price: "25 €",
    note: "Alle Parcours inkl.",
    highlight: false,
    details: "Zugang zu allen Parcours. Jugendliche ab 14 dürfen ohne Begleitung klettern (mit Einverständniserklärung der Eltern).",
  },
  {
    icon: Users,
    category: "Erwachsene*",
    age: "ab 18 Jahre",
    price: "30 €",
    note: "Alle Parcours inkl.",
    highlight: false,
    details: "Uneingeschränkter Zugang zu allen Parcours inkl. Base Jump & Seilrutschen. Keine zeitliche Begrenzung.",
  },
];

const extras = [
  {
    icon: Users,
    title: "Familienkarte",
    price: "99 €",
    description: "2 Erwachsene + bis zu 3 Kinder. Einmaliger Besuch, alle Parcours inklusive.",
  },
  {
    icon: Ticket,
    title: "Saisonkarte",
    price: "149 €",
    description: "Unbegrenzter Zugang für die gesamte Saison (April–Oktober). Gilt für eine Person.",
    highlight: true,
  },
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
    answer: "Im Eintrittspreis enthalten sind: Sicherheitsausrüstung (Klettergurt, Helm, Handschuhe), professionelle Sicherheitseinweisung (ca. 20 Min.) und unbegrenzter Zugang zu den freigegebenen Parcours für den gesamten Tag.",
  },
  {
    question: "Gibt es Ermäßigungen?",
    answer: "Ja! Gruppenrabatt ab 10 Personen (2 € Ermäßigung p.P.), Saisonkarten für Vielkletterer und spezielle Familienkarten. Inhaber der Schwarzwald-Card erhalten 10% Rabatt.",
  },
  {
    question: "Kann ich vor Ort bezahlen?",
    answer: "Ja, wir akzeptieren Barzahlung, EC-Karte und Kreditkarte. Bei Online-Reservierung ist keine Vorauszahlung nötig – bezahlt wird vor Ort.",
  },
  {
    question: "Gibt es eine Alters- oder Größenbeschränkung?",
    answer: "Kinder ab 6 Jahren und mindestens 120 cm Körpergröße dürfen auf den Kinderparcours. Ab 140 cm sind alle Parcours zugänglich. Kinder unter 14 müssen von einem Erwachsenen begleitet werden.",
  },
];

const Preise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {prices.map((p) => (
                <a
                  key={p.category}
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Card
                    className={`relative text-center hover:shadow-xl hover:border-primary transition-all duration-300 h-full ${
                      p.highlight
                        ? "border-2 border-accent shadow-lg scale-[1.03]"
                        : "border-border"
                    }`}
                  >
                    {p.highlight && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 font-bold">
                        <Star className="h-3 w-3 mr-1" /> Bestes Angebot
                      </Badge>
                    )}
                    <CardContent className="pt-8 pb-6 px-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-4">
                        <p.icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Fredoka One', cursive" }}>
                        {p.category}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{p.age}</p>
                      <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
                        {p.price}
                      </div>
                      <p className="text-muted-foreground text-xs mb-4">{p.note}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.details}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
              * Schüler, Azubis und Studenten klettern zum Jugendtarif (25 €) – unabhängig vom Alter. Bitte gültigen Ausweis mitbringen.
            </p>
            <div className="text-center mt-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Jetzt reservieren</a>
              </Button>
            </div>
          </div>
          
        </section>

        {/* Extras */}
        <section className="relative overflow-hidden py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-foreground mb-3">Zusatzangebote</h2>
              <p className="text-muted-foreground text-lg">Noch mehr Abenteuer für Vielkletterer und Familien</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {extras.map((e) => (
                <a
                  key={e.title}
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Card className={`relative text-center hover:shadow-lg hover:border-primary transition-all h-full ${
                    e.highlight ? "border-2 border-accent shadow-lg scale-[1.03]" : ""
                  }`}>
                    {e.highlight && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 font-bold">
                        <Star className="h-3 w-3 mr-1" /> Beste Wahl
                      </Badge>
                    )}
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
                { icon: Clock, text: "Ca. 20 Min. Sicherheitseinweisung" },
                { icon: Clock, text: "3 Stunden Kletterzeit" },
                { icon: HelpCircle, text: "Betreuung durch geschultes Personal" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground font-semibold text-sm">{item.text}</span>
                </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default Preise;
