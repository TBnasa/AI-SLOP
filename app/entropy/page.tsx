"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function EntropyPage() {
  const { executeSlop, isDark } = useSlop();
  const { t } = useLang();
  const [num, setNum] = useState<number | null>(null);
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const random = Math.floor(Math.random() * 100) + 1;
    setNum(random);
    const result = await executeSlop(t("entropy.title"), t("entropy.prompt", random));
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
            <div className="terminal-card-content p-6 text-center">
              <h2 className="text-3xl font-display text-crt-green glow-green mb-6">
                {t("entropy.title")}
              </h2>

              <div className="border border-crt-border p-10 mb-6 bg-crt-bg font-display text-7xl text-crt-amber glow-amber">
                {num !== null ? num : "??"}
              </div>

              <button
                onClick={handleGenerate}
                className="crt-btn w-full py-3 font-mono text-sm"
              >
                {t("entropy.button")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
