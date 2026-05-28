"use client";

import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { isDark } = useSlop();
  const { t } = useLang();

  const modules: { titleKey: string; href: string; descKey: string; num: string }[] = [
    { titleKey: "calc.title", href: "/calc", descKey: "home.calcDesc", num: "01" },
    { titleKey: "editor.title", href: "/editor", descKey: "home.editorDesc", num: "02" },
    { titleKey: "resizer.title", href: "/resizer", descKey: "home.resizerDesc", num: "03" },
    { titleKey: "photon.title", href: "/photon", descKey: "home.photonDesc", num: "04" },
    { titleKey: "converter.title", href: "/converter", descKey: "home.converterDesc", num: "05" },
    { titleKey: "counter.title", href: "/counter", descKey: "home.counterDesc", num: "06" },
    { titleKey: "entropy.title", href: "/entropy", descKey: "home.entropyDesc", num: "07" },
    { titleKey: "relativity.title", href: "/relativity", descKey: "home.relativityDesc", num: "08" },
    { titleKey: "jargon.title", href: "/jargon", descKey: "home.jargonDesc", num: "09" },
  ];

  return (
    <div className="min-h-full">
      {/* System status bar */}
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest">
        <span className="text-black font-bold">root@ai-slops:~$</span>
        <span className="text-gray-500">ls ./modules/ — {modules.length} items</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Module grid - brutalist asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[3px] border-black">
          {modules.map((mod, i) => (
            <Link
              key={mod.href}
              href={mod.href}
              className={`block border-b-[3px] border-black md:border-r-[3px] md:border-r-black p-6 brutal-fade stagger-${i + 1} brutal-shadow-hover group relative ${
                (i + 1) % 3 === 0 ? "md:border-r-0" : ""
              } ${i >= modules.length - 3 ? "border-b-0" : ""} ${
                i === modules.length - 1 ? "md:border-r-0" : ""
              }`}
            >
              {/* Module number */}
              <div className="font-display text-[4rem] leading-none text-gray-200 absolute top-2 right-4 select-none">
                {mod.num}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] mb-2 text-gray-400">
                  MODULE_{mod.num}
                </div>
                <h3 className="brutal-heading text-3xl mb-2 group-hover:text-red-600 transition-colors">
                  {t(mod.titleKey)}
                </h3>
                <p className="font-mono text-[11px] text-gray-600 leading-relaxed mb-4">
                  {t(mod.descKey)}
                </p>
                <div className="font-mono text-[10px] uppercase tracking-widest border-t border-black pt-2 inline-block group-hover:bg-black group-hover:text-white transition-all">
                  {t("home.open")}
                </div>
              </div>
            </Link>
          ))}

          {/* Filler card */}
          <div className="border-b-0 border-black p-6 bg-black text-white flex items-center justify-center min-h-[180px] relative overflow-hidden brutal-fade stagger-9">
            <div className="text-center relative z-10">
              <div className="brutal-heading text-4xl leading-none">
                {t("home.filler").split("\n").map((line: string, j: number) => (
                  <span key={j}>
                    {line}
                    {j < t("home.filler").split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
            {/* Diagonal stripe accent */}
            <div className="absolute top-0 right-0 w-16 h-full stripe-bg opacity-20" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-0 border-[3px] border-black border-t-0 bg-black text-white px-6 py-3 font-mono text-[9px] uppercase tracking-widest flex justify-between">
          <span>AI SLOPS v0.1.0</span>
          <span>ALL OPERATIONS GUARANTEED TO BE SLOW</span>
        </div>
      </div>
    </div>
  );
}
