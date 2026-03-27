"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            {t.faq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
            {t.faq.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.faq.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
