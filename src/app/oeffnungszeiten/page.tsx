"use client";

import Link from "next/link";
import { Clock, Sun, Leaf, Snowflake, CalendarDays, Car, TrainFront, CloudRain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import preiseHeroBg from "@/assets/preise-hero-bg.jpg";

type Season = "hauptsaison" | "uebergang" | "winterpause";

const getSeason = (month: number): Season => {
  if (month >= 4 && month <= 8) return "hauptsaison";
  if (month === 3 || month === 9) return "uebergang";
  return "winterpause";
};

const seasonInfo = {
  hauptsaison: { label: "Hauptsaison (Mai–Sep)", time: "Di–Fr 13–19 / Sa-So 11–19", icon: Sun, colorClass: "bg-emerald-500" },
  uebergang: { label: "Übergangssaison (Apr & Okt)", time: "Sa/So/Feiertage 11–18", icon: Leaf, colorClass: "bg-amber-400" },
  winterpause: { label: "Winterpause (Nov–Mär)", time: "Geschlossen", icon: Snowflake, colorClass: "bg-muted" },
};

const holidays = [
  { name: "Ostermontag", date: "06.04.2026", status: "Geöffnet (Hauptsaison-Zeiten)" },
  { name: "1. Mai", date: "01.05.2026", status: "Geöffnet (Hauptsaison-Zeiten)" },
  { name: "Christi Himmelfahrt", date: "14.05.2026", status: "Geöffnet (Hauptsaison-Zeiten)" },
  { name: "Pfingstmontag", date: "25.05.2026", status: "Geöffnet (Hauptsaison-Zeiten)" },
  { name: "Tag der Deutschen Einheit", date: "03.10.2026", status: "Geöffnet (Hauptsaison-Zeiten)" },
  { name: "Allerheiligen", date: "01.11.2026", status: "Geschlossen" },
  { name: "Heiligabend & Weihnachten", date: "24.–26.12.2026", status: "Geschlossen (Winterpause)" },
  { name: "Silvester & Neujahr", date: "31.12.–01.01.", status: "Geschlossen (Winterpause)" },
];

const Oeffnungszeiten = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[40vh] flex items-center">
        <img src={preiseHeroBg.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/80 via-primary/70 to-forest-medium/80" />
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto">
            <path d="M0,20 C360,60 720,0 1080,40 C1260,55 1380,30 1440,20 L1440,60 L0,60 Z" fill="hsl(40 33% 96%)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Öffnungszeiten
          </span>
          <h1 className="text-4xl sm:text-5xl text-primary-foreground mb-4 drop-shadow-lg">
            Wann kannst du klettern?
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Unsere Öffnungszeiten variieren je nach Saison. Plane deinen Besuch hier.
          </p>
        </div>
      </section>

      {/* Kalender + Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <iframe
              src="https://booking.touritickets.de/embed/07320856-dcc2-42cf-91f2-09c8e789ebb0/calendar"
              className="w-full min-h-[700px] rounded-2xl border-0"
              title="Buchungskalender"
              allow="payment"
            />
          </div>
        </div>
      </section>

      {/* Feiertage */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
              <CalendarDays className="h-6 w-6" />
            </div>
            <h2 className="text-3xl text-foreground mb-3">Feiertage</h2>
            <p className="text-muted-foreground">Regelungen an gesetzlichen Feiertagen in Baden-Württemberg</p>
          </div>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            {holidays.map((h, i) => (
              <div
                key={h.name}
                className={`flex items-center justify-between px-6 py-4 ${i < holidays.length - 1 ? "border-b border-border" : ""}`}
              >
                <div>
                  <span className="font-semibold text-foreground text-sm">{h.name}</span>
                  <span className="text-muted-foreground text-xs ml-2">({h.date})</span>
                </div>
                <span className={`text-sm ${h.status.includes("Geschlossen") ? "text-destructive" : "text-primary"} font-medium`}>
                  {h.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wetter & Hinweise */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-foreground mb-3">Gut zu wissen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 pb-6 px-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-3">
                  <CloudRain className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Wetter</h3>
                <p className="text-muted-foreground text-sm">
                  Bei leichtem Regen sind wir geöffnet – das gehört zum Abenteuer! Bei Gewitter, Sturm oder starkem Regen schließen wir aus Sicherheitsgründen. Aktuelle Infos auf unseren Social-Media-Kanälen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 pb-6 px-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">
                  <Car className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Anfahrt & Parken</h3>
                <p className="text-muted-foreground text-sm">
                  Kostenlose Parkplätze direkt am Kletterwald. Adresse: Waldweg 12, 79219 Staufen im Breisgau. Gut erreichbar über die B31.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 pb-6 px-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">
                  <TrainFront className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">ÖPNV</h3>
                <p className="text-muted-foreground text-sm">
                  Zuglinie S3, Haltestelle „Etzenbach“. Von Staufen Bahnhof ca. 10 Minuten Fahrt. Fahrpläne unter VAG Freiburg.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-foreground mb-4">Jetzt Besuch planen</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Reserviere vorab und sichere dir deinen Platz – besonders an Wochenenden und Feiertagen empfohlen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Jetzt buchen</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold text-lg px-8">
              <Link href="/preise">Preise ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Oeffnungszeiten;
