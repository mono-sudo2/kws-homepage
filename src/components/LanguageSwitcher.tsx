"use client";

import { ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, type Language } from "@/i18n/LanguageContext";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const current = languages.find((l) => l.code === language)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <span className="text-base leading-none">{current.flag}</span>
          <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px] bg-popover z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-base">{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
            {language === lang.code && (
              <Check className="h-4 w-4 ml-auto text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
