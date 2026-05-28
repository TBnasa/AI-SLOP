"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function PhotonPage() {
  const { executeSlop, isDark, setIsDark } = useSlop();
  const { t } = useLang();
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    const mode = isDark ? "LIGHT" : "DARK";
    const result = await executeSlop(t("photon.title"), t("photon.prompt", mode));
    setSlop(result);
    setLoading(false);

    if (result.includes("ONAYLANDI")) {
      setIsDark(!isDark);
    }
  };

  return (
    <div className="min-h-full p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs text-crt-text-dim hover:text-crt-green transition-colors mb-8 group">
          <span className="text-crt-green opacity-50 group-hover:opacity-100 transition-opacity">$</span>
          <span>{t("back")}</span>
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="terminal-card w-full lg:w-[600px]">
            <div className="terminal-card-content p-6">
              <h2 className="text-3xl font-display text-crt-green glow-green mb-6">
                {t("photon.title")}
              </h2>

              {/* Light orb */}
              <div className="flex items-center justify-center h-44 mb-6">
                <div
                  className={`w-28 h-28 rounded-full border border-crt-green transition-all duration-[2000ms] ${
                    isDark
                      ? "bg-crt-surface shadow-[0_0_60px_rgba(51,255,51,0.15)]"
                      : "bg-crt-green shadow-[0_0_80px_rgba(51,255,51,0.4)] glow-green"
                  }`}
                />
              </div>

              <button
                onClick={handleToggle}
                className="crt-btn w-full py-3 font-mono text-sm"
              >
                {isDark ? t("photon.button.on") : t("photon.button.off")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
