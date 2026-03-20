import { TreePine, Shield, Smile, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [TreePine, Smile, Zap, Shield];

const ErlebnisSection = () => {
  const { t } = useLanguage();

  return (
    <section id="erlebnis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            {t.erlebnis.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
            {t.erlebnis.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.erlebnis.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.erlebnis.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <Card
                key={i}
                className="bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ErlebnisSection;
