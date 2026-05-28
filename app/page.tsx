"use client";

import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { isDark } = useSlop();
  const { t } = useLang();

  const modules: { titleKey: string; href: string; descKey: string; icon: string }[] = [
    { titleKey: "calc.title", href: "/calc", descKey: "home.calcDesc", icon: "01" },
    { titleKey: "editor.title", href: "/editor", descKey: "home.editorDesc", icon: "02" },
    { titleKey: "resizer.title", href: "/resizer", descKey: "home.resizerDesc", icon: "03" },
    { titleKey: "photon.title", href: "/photon", descKey: "home.photonDesc", icon: "04" },
    { titleKey: "converter.title", href: "/converter", descKey: "home.converterDesc", icon: "05" },
    { titleKey: "counter.title", href: "/counter", descKey: "home.counterDesc", icon: "06" },
    { titleKey: "entropy.title", href: "/entropy", descKey: "home.entropyDesc", icon: "07" },
    { titleKey: "relativity.title", href: "/relativity", descKey: "home.relativityDesc", icon: "08" },
    { titleKey: "jargon.title", href: "/jargon", descKey: "home.jargonDesc", icon: "09" },
  ];

  return (
    <div className="min-h-full p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* System status bar */}
        <div className="flex items-center gap-4 mb-8 font-mono text-xs text-crt-text-dim">
          <span className="text-crt-green glow-green">$</span>
          <span>ls ./modules/</span>
          <span className="text-crt-text-dim">— {modules.length} modules loaded, response time: 10s avg</span>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <Link key={mod.href} href={mod.href} className={`terminal-card slow-fade stagger-${i + 1}`}>
              <div className="terminal-card-content p-6 flex flex-col gap-3 min-h-[180px]">
                {/* Module number */}
                <div className="text-crt-text-dim font-mono text-[10px] tracking-widest">
                  MODULE_{mod.icon}
                </div>

                {/* Module title */}
                <h3 className="text-2xl font-display text-crt-green glow-green leading-tight">
                  {t(mod.titleKey)}
                </h3>

                {/* Module description */}
                <p className="font-mono text-xs text-crt-text-dim leading-relaxed flex-grow">
                  {t(mod.descKey)}
                </p>

                {/* Action label */}
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-crt-border">
                  <span className="text-crt-green font-mono text-[10px] tracking-widest uppercase group-hover:glow-green transition-all">
                    {t("home.open")}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-crt-green opacity-50" />
                </div>
              </div>
            </Link>
          ))}

          {/* Filler card */}
          <div className="terminal-card slow-fade stagger-9 relative overflow-hidden">
            <div className="terminal-card-content p-6 flex items-center justify-center min-h-[180px]">
              <div className="text-center">
                <div className="text-3xl font-display text-crt-amber glow-amber leading-tight tracking-widest">
                  {t("home.filler").split("\n").map((line: string, j: number) => (
                    <span key={j}>
                      {line}
                      {j < t("home.filler").split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
              {/* Decorative scan line */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="w-full h-px bg-crt-amber absolute top-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer status */}
        <div className="mt-12 pt-6 border-t border-crt-border font-mono text-[10px] text-crt-text-dim text-center">
          AI SLOPS v0.1.0 — all operations guaranteed to be slow — no refunds
        </div>
      </div>
    </div>
  );
}
