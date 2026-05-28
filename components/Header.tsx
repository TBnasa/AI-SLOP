"use client";

import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Header() {
  const { isDark } = useSlop();
  const { locale, setLocale, t } = useLang();

  return (
    <header className="relative z-10 border-b border-crt-border bg-crt-surface/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-4 cursor-pointer">
          {/* Terminal prompt icon */}
          <div className="text-crt-green text-3xl font-display glow-green group-hover:opacity-100 opacity-70 transition-opacity">
            &gt;_
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-display text-crt-green glow-green leading-none tracking-wider">
              AI SLOPS
            </h1>
            <p className="font-mono text-xs text-crt-text-dim mt-1 tracking-widest uppercase">
              {t("header.tagline")}
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {/* Status indicator */}
          <div className="hidden md:flex items-center gap-2 text-crt-text-dim font-mono text-xs">
            <div className="w-2 h-2 rounded-full bg-crt-green animate-pulse" />
            <span>SYSTEM: SLOW</span>
          </div>

          {/* Language toggle */}
          <button
            onClick={() => setLocale(locale === "en" ? "tr" : "en")}
            className="crt-btn px-3 py-1.5 text-xs font-mono"
          >
            {locale === "en" ? "TR" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}
