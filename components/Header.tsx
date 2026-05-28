"use client";

import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Header() {
  const { isDark } = useSlop();
  const { locale, setLocale, t } = useLang();

  return (
    <header className={`border-b-8 ${isDark ? 'border-white bg-[#332f00]' : 'border-black bg-[#ffea00]'} p-6 flex justify-between items-end relative overflow-hidden`}>
      <Link href="/" className="relative z-10 group cursor-pointer">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          AI <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">SLOPS</span>
        </h1>
        <p className="font-mono mt-2 font-bold text-lg bg-black text-white inline-block px-2 py-1 uppercase transform -rotate-2 group-hover:rotate-0 transition-transform">
          {t("header.tagline")}
        </p>
      </Link>
      <div className="relative z-10 flex items-center gap-3">
        <button
          onClick={() => setLocale(locale === "en" ? "tr" : "en")}
          className={`font-black uppercase text-sm border-4 px-3 py-1 transition-all hover:-translate-y-0.5 ${isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
        >
          {locale === "en" ? "TR" : "EN"}
        </button>
      </div>
      <h2 className="hidden md:block text-[10rem] font-black opacity-10 tracking-widest absolute right-0 -bottom-12 pointer-events-none">
        SLOPS
      </h2>
    </header>
  );
}
