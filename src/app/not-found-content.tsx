"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export function NotFoundContent() {
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t.notFound.title}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.notFound.message}</p>
        <Link href="/" className="text-primary underline hover:text-primary/90">
          {t.notFound.link}
        </Link>
      </div>
    </div>
  );
}
