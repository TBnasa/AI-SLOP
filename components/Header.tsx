"use client";

import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Header() {
  const { isDark } = useSlop();
  const { locale, setLocale, t } = useLang();

  return (
    <header className="border-b-[5px] border-black bg-white relative">
      {/* Color stripe */}
      <div className="color-stripe" />

      {/* Marquee ticker */}
      <div className="bg-black text-white overflow-hidden py-1.5 border-b-[3px] border-black">
        <div className="marquee whitespace-nowrap font-mono text-[10px] uppercase tracking-widest">
          <span className="inline-block px-6 clr-red">SLOW</span>
          <span className="inline-block px-6 clr-yellow">USELESS</span>
          <span className="inline-block px-6 clr-green">BROKEN</span>
          <span className="inline-block px-6 clr-blue">AI POWERED</span>
          <span className="inline-block px-6 clr-orange">10 SEC DELAY</span>
          <span className="inline-block px-6 clr-purple">NO REFUNDS</span>
          <span className="inline-block px-6 clr-red">SLOW</span>
          <span className="inline-block px-6 clr-yellow">USELESS</span>
          <span className="inline-block px-6 clr-green">BROKEN</span>
          <span className="inline-block px-6 clr-blue">AI POWERED</span>
          <span className="inline-block px-6 clr-orange">10 SEC DELAY</span>
          <span className="inline-block px-6 clr-purple">NO REFUNDS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex items-end justify-between">
        <Link href="/" className="group cursor-pointer">
          <h1 className="brutal-heading text-[5rem] md:text-[7rem] leading-[0.85] tracking-tighter">
            AI
            <br />
            <span className="text-[6rem] md:text-[9rem]">SLOPS</span>
          </h1>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] border-t-2 border-black pt-2 inline-block">
            {t("header.tagline")}
          </div>
        </Link>

        <div className="flex items-end gap-4 pb-3">
          <div className="hidden md:flex items-center gap-2 border-[3px] border-black px-3 py-2">
            <div className="w-2 h-2 bg-green animate-pulse" />
            <span className="font-mono text-[10px] uppercase">STATUS: SLOW</span>
          </div>

          <button
            onClick={() => setLocale(locale === "en" ? "tr" : "en")}
            className="brutal-btn px-4 py-2 text-sm"
          >
            {locale === "en" ? "TR" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}
