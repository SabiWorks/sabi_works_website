"use client";
import { useLocaleContext } from "./LocaleProvider";

export function useTranslation() {
  const { t, locale, setLocale } = useLocaleContext();
  return { t, locale, setLocale };
}
