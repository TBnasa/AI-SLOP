"use client";

import React, { createContext, useContext, useState } from "react";
import { useLang } from "@/context/LanguageContext";

interface SlopContextType {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  executeSlop: (action: string, input: string) => Promise<string>;
}

const SlopContext = createContext<SlopContextType | undefined>(undefined);

export function SlopProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const { locale } = useLang();

  const executeSlop = async (action: string, input: string): Promise<string> => {
    const delay = new Promise(resolve => setTimeout(resolve, 10000));

    try {
      const res = await fetch("/api/slop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, input, lang: locale }),
      });
      const data = await res.json();

      await delay;

      if (data.error) return `[ERROR] ${data.error}`;
      return data.result;
    } catch (err) {
      await delay;
      return `[FATAL] Something went wrong. Connection timed out. Please try again.`;
    }
  };

  return (
    <SlopContext.Provider value={{ isDark, setIsDark, executeSlop }}>
      {children}
    </SlopContext.Provider>
  );
}

export function useSlop() {
  const context = useContext(SlopContext);
  if (context === undefined) {
    throw new Error("useSlop must be used within a SlopProvider");
  }
  return context;
}
