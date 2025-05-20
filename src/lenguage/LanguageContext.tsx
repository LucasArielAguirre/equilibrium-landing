// src/LanguageContext.tsx
import { createContext, useContext, useState } from "react";
import { translations } from "./locales";

const LanguageContext = createContext({
  lang: "en",
  toggleLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<"en" | "es">("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  const t = (key: string) => translations[lang][key as keyof typeof translations["en"]] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
