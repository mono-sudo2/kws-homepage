import { Cake, Briefcase, GraduationCap, TreePine, MountainSnow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/i18n/LanguageContext";

const eventIcons = [Cake, Briefcase, GraduationCap];

const EventsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-primary via-forest-medium to-forest-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path d="M0,0 L1440,0 L1440,20 C1080,60 720,0 360,40 C180,55 0,30 0,20 Z" fill="hsl(40 33% 96%)" />
        </svg>
      </div>
      <TreePine className="absolute top-8 left-6 h-32 w-32 text-primary-foreground opacity-10" />
      <TreePine className="absolute top-4 right-8 h-48 w-48 text-primary-foreground opacity-10" />
      <TreePine className="absolute bottom-8 left-12 h-40 w-40 text-primary-foreground opacity-10" />
      <MountainSnow className="absolute bottom-6 right-10 h-36 w-36 text-primary-foreground opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            {t.events.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl text-primary-foreground mb-4">
            {t.events.title}
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            {t.events.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.events.items.map((event, i) => {
            const Icon = eventIcons[i];
            return (
              <a
                key={i}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              >
                <Card className="border-border hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-4 transition-colors">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <ul className="space-y-1">
                      {event.features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.events.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
