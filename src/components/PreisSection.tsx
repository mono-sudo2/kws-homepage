import { Baby, User, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";

const priceIcons = [Baby, User, Users];

const PreisSection = () => {
  const { t } = useLanguage();

  return (
    <section id="preise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-light text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            {t.preise.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
            {t.preise.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.preise.description}
          </p>
        </div>

        <div className="flex gap-6 max-w-4xl mx-auto overflow-x-auto snap-x snap-mandatory pb-4 md:justify-center md:overflow-visible">
          {t.preise.categories.map((p, i) => {
            const Icon = priceIcons[i];
            return (
              <Card
                key={i}
                className="relative text-center hover:shadow-xl transition-all duration-300 min-w-[260px] snap-center flex-shrink-0 md:flex-shrink md:min-w-0 md:flex-1 border-border"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    {p.category}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {p.height} · {p.ageReq}
                  </p>
                  <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    {p.price}
                  </div>
                  <p className="text-muted-foreground text-xs">{p.note}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10 space-y-4">
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            {t.preise.hint}
          </p>
          <a
            href="/preise"
            className="inline-block text-primary font-bold hover:underline text-sm"
          >
            {t.preise.link}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreisSection;
