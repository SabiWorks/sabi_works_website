"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import en from "@/locales/en.json";
import am from "@/locales/am.json";

type Translations = Record<string, string>;

const allTranslations: Record<string, Translations> = {
  en,
  am,
};

type LocaleContextType = {
  locale: string;
  setLocale: (l: string) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<string>("en");

  useEffect(() => {
    // hydrate from localStorage or navigator
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (saved && allTranslations[saved]) {
      setLocaleState(saved);
    } else if (typeof window !== "undefined") {
      const nav = (navigator.language || "en").slice(0, 2);
      setLocaleState(allTranslations[nav] ? nav : "en");
    }
  }, []);

  function setLocale(l: string) {
    if (!allTranslations[l]) return;
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch (_) {}
  }

  function t(key: string) {
    return (
      (allTranslations[locale] && allTranslations[locale][key]) ||
      allTranslations["en"][key] ||
      key
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx)
    throw new Error("useLocaleContext must be used within LocaleProvider");
  return ctx;
}
