"use client";

import { Baby, Zap, Mountain, Flame, ArrowDownCircle, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const parcoursIcons = [Baby, Zap, Mountain, Flame];
const parcoursColors = [
  { bg: "bg-yellow-50", border: "border-yellow-400", iconBg: "bg-yellow-100", dot: "bg-yellow-400" },
  { bg: "bg-green-50", border: "border-green-500", iconBg: "bg-green-100", dot: "bg-green-500" },
  { bg: "bg-blue-50", border: "border-blue-500", iconBg: "bg-blue-100", dot: "bg-blue-500" },
  { bg: "bg-red-50", border: "border-red-500", iconBg: "bg-red-100", dot: "bg-red-500" },
];

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

        {/* Parcours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.parcours.items.map((p, i) => {
            const Icon = parcoursIcons[i];
            const style = parcoursColors[i];
            return (
              <Card
                key={i}
                className={`${style.border} border-2 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}
              >
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
                <CardContent className="pt-4 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {p.description}
                  </p>
                  {p.courses && (
                    <div className="flex flex-wrap gap-2 mb-2">
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
                  {p.specialCourse && (
                    <>
                      <div className="border-t border-border my-3" />
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm"
                          style={{ background: "linear-gradient(90deg, #facc15 50%, #3b82f6 50%)" }}
                        >
                          {p.specialCourse.name}
                        </span>
                        <span className="text-xs text-muted-foreground italic">
                          ⚠ {p.specialCourse.note}
                        </span>
                      </div>
                      <div className="border-t border-border mt-3" />
                    </>
                  )}
                  {p.attraction && (
                    <>
                      <div className="border-t border-border my-3" />
                      <div className="mb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <Wind className="h-4 w-4 text-primary" />
                          <span className="text-sm font-bold text-foreground">{p.attraction.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{p.attraction.description}</p>
                      </div>
                      <div className="border-t border-border mt-3" />
                    </>
                  )}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold mt-auto pt-4">
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

        {/* Attraktionen */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl text-foreground mb-2">
              {t.parcours.attractionsTitle}
            </h3>
            <p className="text-muted-foreground text-lg">
              {t.parcours.attractionsDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.parcours.attractions.map((a, i) => {
              const AttrIcon = i === 0 ? ArrowDownCircle : Wind;
              return (
                <Card
                  key={i}
                  className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-accent/10 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-xl p-2.5 shadow-sm">
                        <AttrIcon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{a.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {a.description}
                    </p>
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
      </div>
    </section>
  );
};

export default ParcoursSection;
