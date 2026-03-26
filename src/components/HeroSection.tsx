"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/i18n/LanguageContext";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="start"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Fullscreen Background Image */}
      <img
        src={heroBg.src}
        alt="Kletterwald Staufen – Kletterwald im Schwarzwald"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Wavy Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            fill="hsl(40 33% 96%)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-8 bg-primary text-primary-foreground hover:bg-primary border-0 px-4 py-1.5 text-sm tracking-wide uppercase">
            {t.hero.subtitle}
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 leading-tight drop-shadow-2xl">
            {t.hero.title}
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-accent/25 transition-all hover:scale-105"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.hero.cta1}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white bg-white/5 hover:bg-white/15 backdrop-blur-sm font-bold text-lg px-10 py-7"
            >
              <Link href="/oeffnungszeiten">{t.hero.cta2}</Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <ChevronDown className="h-6 w-6 text-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
