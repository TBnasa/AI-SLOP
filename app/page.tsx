"use client";

import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { isDark } = useSlop();
  const { t } = useLang();

  const cardClass = `border-8 border-black p-6 flex flex-col gap-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] cursor-pointer ${isDark ? 'bg-zinc-800 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] text-white' : 'bg-white text-black'}`;

  const containerClass = `min-h-full font-sans p-8 md:p-12 transition-colors duration-500 ${isDark ? 'bg-zinc-950' : 'bg-[#f4f4f0]'}`;

  const modules: { titleKey: string; href: string; descKey: string }[] = [
    { titleKey: "calc.title", href: "/calc", descKey: "home.calcDesc" },
    { titleKey: "editor.title", href: "/editor", descKey: "home.editorDesc" },
    { titleKey: "resizer.title", href: "/resizer", descKey: "home.resizerDesc" },
    { titleKey: "photon.title", href: "/photon", descKey: "home.photonDesc" },
    { titleKey: "converter.title", href: "/converter", descKey: "home.converterDesc" },
    { titleKey: "counter.title", href: "/counter", descKey: "home.counterDesc" },
    { titleKey: "entropy.title", href: "/entropy", descKey: "home.entropyDesc" },
    { titleKey: "relativity.title", href: "/relativity", descKey: "home.relativityDesc" },
    { titleKey: "jargon.title", href: "/jargon", descKey: "home.jargonDesc" },
  ];

  return (
    <div className={containerClass}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {modules.map((mod) => (
          <Link key={mod.href} href={mod.href} className={cardClass}>
            <h3 className="text-2xl font-black uppercase tracking-tighter">{t(mod.titleKey)}</h3>
            <p className="font-mono text-sm">{t(mod.descKey)}</p>
            <div className="mt-auto flex justify-between items-center">
               <span className="text-xs font-bold underline bg-black text-white px-2 py-1">{t("home.open")}</span>
               <div className="w-4 h-4 bg-black rounded-full animate-pulse"></div>
            </div>
          </Link>
        ))}

        <div className={`${cardClass} bg-[#ff00ff] ${isDark ? 'bg-purple-900 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]' : ''} flex items-center justify-center overflow-hidden relative cursor-default`}>
           <div className="text-center font-black text-4xl transform -rotate-12 relative z-10 leading-tight">
             {t("home.filler").split("\n").map((line: string, i: number) => <span key={i}>{line}<br/></span>)}
           </div>
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
        </div>

      </div>
    </div>
  );
}
