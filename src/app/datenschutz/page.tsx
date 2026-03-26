"use client";
import { useLanguage } from "@/i18n/LanguageContext";

const Datenschutz = () => {
  const { t } = useLanguage();
  return (
    <>
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl text-foreground mb-4">{t.datenschutzPage.title}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-bold mb-2">1. Verantwortlicher</h2>
            <p className="text-muted-foreground">Breisgau Outdoor GmbH<br />Kolpingweg 5<br />79219 Staufen im Breisgau<br />E-Mail: <a href="mailto:info@kletterwald-staufen.de" className="text-primary underline">info@kletterwald-staufen.de</a><br />Telefon: +49 (0) 174 910 6186</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-muted-foreground">Beim Besuch unserer Website werden automatisch Informationen durch den Server-Logfile erfasst: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nach 14 Tagen automatisch gelöscht.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">3. Kontaktformular</h2>
            <p className="text-muted-foreground">Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zum Zwecke der Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">4. Cookies</h2>
            <p className="text-muted-foreground">Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies eingesetzt. Sie können Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">5. Ihre Rechte</h2>
            <p className="text-muted-foreground">Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">6. Änderung dieser Datenschutzerklärung</h2>
            <p className="text-muted-foreground">Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground italic">Hinweis: Diese Datenschutzerklärung dient als Muster und ersetzt keine individuelle Rechtsberatung. Stand: März 2026</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Datenschutz;
