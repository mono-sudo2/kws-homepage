"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="kontakt" className="bg-forest-dark text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Kontakt */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>{t.footer.kontakt}</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Etzenbach 1, 79219 Staufen im Breisgau</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+49 (0)7633 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@kletterwald-staufen.de</span>
              </li>
            </ul>
          </div>

          {/* Seiten */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>{t.footer.seiten}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/oeffnungszeiten" className="hover:text-primary-foreground transition-colors">{t.footer.oeffnungszeiten}</Link></li>
              <li><Link href="/preise" className="hover:text-primary-foreground transition-colors">{t.footer.preise}</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-primary-foreground transition-colors">{t.footer.ueberUns}</Link></li>
              <li><Link href="/kontakt" className="hover:text-primary-foreground transition-colors">{t.footer.kontaktLink}</Link></li>
              <li><Link href="/jobs" className="hover:text-primary-foreground transition-colors">{t.footer.jobs}</Link></li>
              <li><a href="/documents/einverstaendniserklaerung.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">{t.footer.einverstaendnis}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>{t.footer.folgeUns}</h3>
            <div className="flex gap-3 mb-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t.footer.parking}
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-70">
            <img
              src={logo.src}
              alt="Kletterwald Staufen"
              className="h-8 w-8 object-contain"
              width={32}
              height={32}
            />
            <span className="text-xs text-primary-foreground/60">
              {t.footer.copyright}
            </span>
          </div>
          <div className="text-xs text-primary-foreground/50 flex gap-4">
            <Link href="/impressum" className="hover:text-primary-foreground/80 transition-colors">{t.footer.impressum}</Link>
            <Link href="/datenschutz" className="hover:text-primary-foreground/80 transition-colors">{t.footer.datenschutz}</Link>
            <Link href="/agb" className="hover:text-primary-foreground/80 transition-colors">{t.footer.agb}</Link>
            <span>{t.footer.copyrightYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
