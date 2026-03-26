"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navKeys = ["start", "abenteuer", "preise", "oeffnungszeiten", "ueberUns", "kontakt", "jobs"] as const;
const navHrefs = ["/", "/abenteuer", "/preise", "/oeffnungszeiten", "/ueber-uns", "/kontakt", "/jobs"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  const navItems = navKeys.map((key, i) => ({
    label: t.header.nav[key],
    href: navHrefs[i],
  }));

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (pathname === "/") {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/" + hash);
      }
    }
  };

  const isPage = (href: string) => !href.startsWith("/#");

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src={logo.src} alt="Kletterwald Staufen" className="h-9 w-9 group-hover:scale-110 transition-transform" />
          <div className="flex items-center">
            <span className="text-lg font-bold text-foreground tracking-tight">
              Kletterwald <span className="text-primary">Staufen</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            isPage(item.href) ? (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md hover:bg-secondary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href.substring(1)}
                onClick={(e) => {
                  if (pathname !== "/") {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* CTA + Language + Mobile Menu */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-md hidden sm:inline-flex"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t.header.cta}
            </a>
          </Button>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card w-72">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex items-center gap-2 mb-8 mt-2">
                <img src={logo.src} alt="Kletterwald Staufen" className="h-8 w-8" />
                <span className="font-bold text-foreground">Kletterwald Staufen</span>
              </div>
              <Button
                asChild
                className="mb-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full"
                onClick={() => setOpen(false)}
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.header.cta}</a>
              </Button>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) =>
                  isPage(item.href) ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 text-base font-semibold hover:bg-secondary rounded-lg transition-colors ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href.substring(1)}
                      onClick={(e) => {
                        if (pathname !== "/") {
                          e.preventDefault();
                        }
                        handleNavClick(item.href);
                      }}
                      className="px-4 py-3 text-base font-semibold text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
