"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { type Locale, t as translate, locales } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, ...args: any[]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("slop-lang") as Locale | null;
    if (saved && locales.includes(saved)) {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("slop-lang", newLocale);
  };

  const localizedT = (key: string, ...args: any[]) => translate(locale, key, ...args);

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t: localizedT }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context;
}
