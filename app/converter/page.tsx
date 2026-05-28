"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function ConverterPage() {
  const { executeSlop, isDark } = useSlop();
  const { t } = useLang();
  const [meters, setMeters] = useState("");
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!meters) return;
    setLoading(true);
    const cm = parseFloat(meters) * 100;
    const result = await executeSlop(t("converter.title"), t("converter.prompt", meters, cm));
    setSlop(result);
    setLoading(false);
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
                {t("converter.title")}
              </h2>

              <div className="flex gap-4 mb-5">
                <div className="flex-grow">
                  <label className="block font-mono text-xs text-crt-text-dim mb-2 uppercase">
                    {t("converter.labelFrom")}
                  </label>
                  <input
                    type="number"
                    value={meters}
                    onChange={(e) => setMeters(e.target.value)}
                    className="crt-input w-full p-4 font-mono text-sm"
                    placeholder={t("converter.placeholder")}
                  />
                </div>
                <div className="flex items-end pb-4 font-display text-2xl text-crt-amber glow-amber">→</div>
                <div className="flex-grow">
                  <label className="block font-mono text-xs text-crt-text-dim mb-2 uppercase">
                    {t("converter.labelTo")}
                  </label>
                  <div className="w-full p-4 border border-crt-border font-mono text-sm h-[54px] flex items-center bg-crt-bg/50 text-crt-text-dim">
                    {meters ? parseFloat(meters) * 100 : "?"}
                  </div>
                </div>
              </div>

              <button
                onClick={handleConvert}
                className="crt-btn w-full py-3 font-mono text-sm"
              >
                {t("converter.button")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
