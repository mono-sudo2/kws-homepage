"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, TreePine, Heart, Mountain, Calendar, Users, Trophy, Puzzle, Sparkles, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import preiseHeroBg from "@/assets/preise-hero-bg.jpg";

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

const milestones = [
  { year: "2009", icon: Sparkles, title: "Gründung", description: "Eröffnung mit 3 Parcours und einer großen Vision – Kletterspaß für alle mitten im Schwarzwald." },
  { year: "2013", icon: Users, title: "Erweiterung", description: "Neue Parcours für Kinder und Familien. Der Kletterwald wird zum Ausflugsziel für die ganze Region." },
  { year: "2017", icon: Trophy, title: "Wachstum", description: "10+ Parcours und über 100.000 Besucher. Der Kletterwald Staufen wird zum größten Park in Südbaden." },
  { year: "2021", icon: Rocket, title: "Innovation", description: "Einführung modernster Sicherheitssysteme und neuer Formate wie Nachtklettern und Teambuilding-Events." },
  { year: "2024", icon: Mountain, title: "Meilenstein", description: "Größter Kletterpark in Südbaden mit 15+ Parcours, 200+ Kletter-Elementen und jährlich über 100.000 Besuchern." },
  { year: "2026", icon: Rocket, title: "Neu-Eröffnung", description: "Mit neuem Partner und einem jungen Geschäftsführer voller Ideen startet der Kletterwald Staufen in eine neue Ära – frischer Wind, große Pläne und jede Menge Kletterspaß." },
];

const values = [
  { icon: ShieldCheck, title: "Sicherheit", description: "Modernste Sicherungssysteme und regelmäßig geschultes Personal – damit du dich voll aufs Klettern konzentrieren kannst." },
  { icon: TreePine, title: "Natur", description: "Nachhaltiger Umgang mit dem Wald. Alle Bäume bleiben erhalten und werden regelmäßig von Baumpflegern kontrolliert." },
  { icon: Heart, title: "Gemeinschaft", description: "Ein Ort für Familien, Freunde und Teams. Gemeinsame Erlebnisse schaffen Erinnerungen, die bleiben." },
  { icon: Mountain, title: "Abenteuer", description: "Herausforderungen für jedes Level – vom Anfänger bis zum Profi. Jeder findet seinen Parcours." },
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "100.000+", label: "Besucher" },
  { value: "200+", label: "Kletter-Elemente" },
];

const UeberUns = () => {
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
              Über uns
            </span>
            <h1 className="text-4xl sm:text-5xl text-primary-foreground mb-4">
              Wer wir sind
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Seit über 15 Jahren bauen wir den größten Kletterpark in Südbaden – mit Leidenschaft, Sicherheit und ganz viel Natur.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-foreground mb-3">Unsere Geschichte</h2>
              <p className="text-muted-foreground text-lg">Von 3 Parcours zur größten Anlage in Südbaden</p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-px" />

              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-start gap-6 mb-10 last:mb-0 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`flex-1 pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"}`}>
                    <span className="inline-block text-sm font-bold text-primary mb-1">{m.year}</span>
                    <h3 className="text-lg font-bold text-foreground mb-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
                  </div>
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 z-10 shadow-md">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="relative overflow-hidden py-16 bg-secondary/50">
          <WavyTop fill="hsl(40 33% 96%)" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-foreground mb-3">Wofür wir stehen</h2>
              <p className="text-muted-foreground text-lg">Unsere Werte leiten alles, was wir tun</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((v) => (
                <Card key={v.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                      <v.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Zahlen & Fakten */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-foreground mb-3">Zahlen & Fakten</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{s.value}</div>
                  <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-16 bg-secondary/50">
          <WavyTop fill="hsl(40 33% 96%)" />
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-foreground mb-4">Erlebe es selbst!</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Überzeuge dich vor Ort von unserem Kletterwald – wir freuen uns auf deinen Besuch!
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Jetzt buchen</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UeberUns;
