"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function CounterPage() {
  const { executeSlop, isDark } = useSlop();
  const { t } = useLang();
  const [input, setInput] = useState("");
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCount = async () => {
    if (!input) return;
    setLoading(true);
    const count = input.length;
    const result = await executeSlop(t("counter.title"), t("counter.prompt", input, count));
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
                {t("counter.title")}
              </h2>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="crt-input w-full p-4 font-mono text-sm mb-4"
                placeholder={t("counter.placeholder")}
              />

              <div className="flex justify-between items-center font-mono text-sm text-crt-text-dim mb-5">
                <span>{t("counter.label")}</span>
                <span className="text-crt-amber glow-amber font-display text-xl">{input.length}</span>
              </div>

              <button
                onClick={handleCount}
                className="crt-btn w-full py-3 font-mono text-sm"
              >
                {t("counter.button")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
