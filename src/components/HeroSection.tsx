import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroBg from "@/assets/hero-bg.jpg";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="start"
      className="relative overflow-hidden bg-gradient-to-br from-forest-dark via-primary to-forest-medium min-h-[90vh] flex items-center"
    >
      <img src={heroBg.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/80 via-primary/70 to-forest-medium/80" />

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            fill="hsl(40 33% 96%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 animate-bounce-slow bg-white/90 rounded-full p-2 shadow-lg">
            <img src={logo.src} alt="Kletterwald Staufen" className="h-16 w-16 drop-shadow-xl" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto font-semibold">
            {t.hero.subtitle}
          </p>
          <p className="text-base sm:text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.hero.cta1}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-bold text-lg px-8 py-6"
            >
              <Link href="/oeffnungszeiten">{t.hero.cta2}</Link>
            </Button>
          </div>

          <div className="flex justify-center mt-10 animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
