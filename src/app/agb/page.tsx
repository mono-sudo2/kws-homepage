"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const AGB = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl text-foreground mb-4">{t.agbPage.title}</h1>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground text-center">{t.agbPage.content}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
