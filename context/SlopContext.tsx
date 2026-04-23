"use client";

import React, { createContext, useContext, useState } from "react";

interface SlopContextType {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  executeSlop: (action: string, input: string) => Promise<string>;
}

const SlopContext = createContext<SlopContextType | undefined>(undefined);

export function SlopProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const executeSlop = async (action: string, input: string): Promise<string> => {
    try {
      const res = await fetch("/api/slop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, input }),
      });
      const data = await res.json();
      
      if (data.error) return `[ERROR] ${data.error}`;
      return data.result;
    } catch (err) {
      return `[FATAL] Neural link severed. Connection timed out.`;
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
