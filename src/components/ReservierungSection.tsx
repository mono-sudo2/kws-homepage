// Original calendar imports preserved for future use:
// import { useMemo, useState } from "react";
// import { DayPicker } from "react-day-picker";
// import { addMonths, eachDayOfInterval, startOfMonth, endOfMonth } from "date-fns";
// import { de as deLocale } from "date-fns/locale";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";

import { Clock, Sun, Snowflake, Leaf, ArrowRight, TreePine, MountainSnow } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Original season logic preserved for future use:
// type Season = "hauptsaison" | "uebergang" | "winterpause";
// const getSeason = (month: number): Season => {
//   if (month >= 4 && month <= 8) return "hauptsaison";
//   if (month === 3 || month === 9) return "uebergang";
//   return "winterpause";
// };
// const seasonIcons = { hauptsaison: Sun, uebergang: Leaf, winterpause: Snowflake };
// const seasonColorClass = { hauptsaison: "bg-emerald-500", uebergang: "bg-amber-400", winterpause: "bg-muted" };

const ReservierungSection = () => {
  const { t } = useLanguage();

  return (
    <section id="oeffnungszeiten" className="py-20 bg-gradient-to-br from-primary via-forest-medium to-forest-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10"><TreePine className="h-32 w-32 text-primary-foreground" /></div>
        <div className="absolute top-20 right-20"><TreePine className="h-48 w-48 text-primary-foreground" /></div>
        <div className="absolute bottom-20 left-1/4"><TreePine className="h-40 w-40 text-primary-foreground" /></div>
        <div className="absolute bottom-10 right-10"><MountainSnow className="h-36 w-36 text-primary-foreground" /></div>
      </div>
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path d="M0,0 L1440,0 L1440,20 C1080,60 720,0 360,40 C180,55 0,30 0,20 Z" fill="hsl(40 33% 96%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Clock className="inline h-4 w-4 mr-1 -mt-0.5" />
            {t.reservierung.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl text-primary-foreground mb-4">
            {t.reservierung.title}
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            {t.reservierung.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <iframe
            src="https://booking.touritickets.de/embed/07320856-dcc2-42cf-91f2-09c8e789ebb0/calendar"
            className="w-full min-h-[700px] rounded-2xl border-0"
            title="Buchungskalender"
            allow="payment"
          />
        </div>

        <div className="text-center mt-8">
          <a
            href="/oeffnungszeiten"
            className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground font-semibold text-sm hover:underline"
          >
            {t.reservierung.link} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReservierungSection;
