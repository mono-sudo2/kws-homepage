"use client";
import { useLanguage } from "@/i18n/LanguageContext";

const Impressum = () => {
  const { t } = useLanguage();
  return (
    <>
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl text-foreground mb-4">{t.impressumPage.title}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-8 text-foreground">
          <div>
            <p className="font-semibold">Breisgau Outdoor GmbH</p>
            <p>Kolpingweg 5</p>
            <p>79219 Staufen im Breisgau</p>
          </div>
          <div>
            <p>Handelsregister: HRB 711419</p>
            <p>Registergericht: Freiburg im Breisgau</p>
          </div>
          <div>
            <p className="font-semibold">Vertreten durch:</p>
            <p>Karl-Heinz Glück</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Kontakt</h2>
            <p>Telefon: +49 (0) 174 910 6186</p>
            <p>E-Mail: <a href="mailto:info@kletterwald-staufen.de" className="text-primary underline">info@kletterwald-staufen.de</a></p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
            <p className="text-muted-foreground">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impressum;
