import { Baby, Users, Wind, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const parcoursIcons = [Baby, Users, Wind, Rocket];
const parcoursColors = [
  { color: "bg-secondary", borderColor: "border-primary/30" },
  { color: "bg-secondary", borderColor: "border-primary/40" },
  { color: "bg-amber-light", borderColor: "border-accent/40" },
  { color: "bg-amber-light", borderColor: "border-accent/60" },
];
const difficulties = [1, 2, 3, 4];

const DifficultyBar = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className={`h-2 w-6 rounded-full transition-colors ${
          i <= level ? "bg-primary" : "bg-border"
        }`}
      />
    ))}
  </div>
);

const ParcoursSection = () => {
  const { t } = useLanguage();

  return (
    <section id="parcours" className="py-20 bg-secondary/30">
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
              <Card
                key={i}
                className={`${style.borderColor} border-2 hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <CardHeader className={`${style.color} pb-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-card rounded-xl p-2.5 shadow-sm">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{p.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>{t.parcours.difficulty}</span>
                      <DifficultyBar level={difficulties[i]} />
                    </div>
                    <span className="bg-muted px-2 py-1 rounded-md">⏱ {p.duration}</span>
                    <span className="bg-muted px-2 py-1 rounded-md">📏 {p.minHeight}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParcoursSection;
