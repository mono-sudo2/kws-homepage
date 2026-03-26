"use client";

import Link from "next/link";
import { Baby, Zap, Mountain, Flame, ArrowDownCircle, Wind, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const parcoursIcons = [Baby, Zap, Mountain, Flame];
const parcoursColors = [
  { bg: "bg-yellow-50", border: "border-yellow-400", iconBg: "bg-yellow-100", dot: "bg-yellow-400" },
  { bg: "bg-green-50", border: "border-green-500", iconBg: "bg-green-100", dot: "bg-green-500" },
  { bg: "bg-blue-50", border: "border-blue-500", iconBg: "bg-blue-100", dot: "bg-blue-500" },
  { bg: "bg-red-50", border: "border-red-500", iconBg: "bg-red-100", dot: "bg-red-500" },
];

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

const Abenteuer = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <img src={heroBg.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <WavyBottom fill="hsl(40 33% 96%)" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            {t.abenteuerPage.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight drop-shadow-2xl">
            {t.abenteuerPage.title}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-6">
            {t.abenteuerPage.description}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.header.cta}</a>
          </Button>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              {t.parcours.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              {t.parcours.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t.parcours.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.parcours.items.map((p, i) => {
              const Icon = parcoursIcons[i];
              const style = parcoursColors[i];
              return (
                <Card key={i} className={`${style.border} border-2 hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  <CardHeader className={`${style.bg} pb-4`}>
                    <div className="flex items-center gap-3">
                      <div className={`${style.iconBg} rounded-xl p-2.5 shadow-sm`}>
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{p.name}</CardTitle>
                      {p.badge && (
                        <span className={`ml-auto text-xs font-bold px-2.5 py-1 rounded-full ${style.border} border bg-card text-foreground`}>
                          {p.badge}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
                    {p.courses && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.courses.map((course: { name: string; color: string }, ci: number) => {
                          const colorMap: Record<string, string> = {
                            yellow: "bg-yellow-400 text-yellow-950",
                            green: "bg-green-500 text-white",
                            blue: "bg-blue-500 text-white",
                            red: "bg-red-500 text-white",
                            "yellow-blue": "text-white",
                          };
                          return (
                            <span
                              key={ci}
                              className={`${colorMap[course.color] || "bg-muted text-muted-foreground"} px-3 py-1 rounded-full text-xs font-bold shadow-sm`}
                              style={course.color === "yellow-blue" ? { background: "linear-gradient(90deg, #facc15 50%, #3b82f6 50%)" } : undefined}
                            >
                              {course.name}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="bg-muted text-muted-foreground px-2.5 py-1 rounded-md">📏 {p.minHeight}</span>
                      {i > 0 && (
                        <span className="bg-muted text-muted-foreground px-2.5 py-1 rounded-md">🎂 {t.parcours.minAge}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Attraktionen */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-2">
              {t.parcours.attractionsTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.parcours.attractionsDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.parcours.attractions.map((a, i) => {
              const AttrIcon = i === 0 ? ArrowDownCircle : Wind;
              return (
                <Card key={i} className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-accent/10 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-xl p-2.5 shadow-sm">
                        <AttrIcon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{a.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{a.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="bg-muted text-muted-foreground px-2.5 py-1 rounded-md">📏 {a.minHeight}</span>
                      <span className="bg-muted text-muted-foreground px-2.5 py-1 rounded-md">🎂 {t.parcours.minAge}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schatzsuche */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/90 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              {t.abenteuerPage.treasureHunt.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              {t.abenteuerPage.treasureHunt.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t.abenteuerPage.treasureHunt.description}
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-accent/40 bg-gradient-to-br from-accent/5 to-primary/5 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 rounded-xl p-2.5 shadow-sm">
                    <Search className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{t.abenteuerPage.treasureHunt.cardTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {t.abenteuerPage.treasureHunt.cardDescription}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-primary">{t.abenteuerPage.treasureHunt.price}</span>
                  <span className="text-xs text-muted-foreground">{t.abenteuerPage.treasureHunt.priceNote}</span>
                </div>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.header.cta}</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-foreground mb-4">{t.abenteuerPage.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{t.abenteuerPage.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.header.cta}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8">
              <Link href="/preise">{t.abenteuerPage.ctaPrices}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Abenteuer;
