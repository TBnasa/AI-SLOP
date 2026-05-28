"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function ResizerPage() {
  const { executeSlop, isDark } = useSlop();
  const { t } = useLang();
  const [fileName, setFileName] = useState("");
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResize = async () => {
    if (!fileName) return;
    setLoading(true);
    const result = await executeSlop(t("resizer.title"), t("resizer.prompt", fileName));
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
                {t("resizer.title")}
              </h2>

              {/* Preview area */}
              <div className="border border-crt-border border-dashed p-10 mb-5 flex flex-col items-center justify-center gap-3 bg-crt-bg/50">
                <div className="text-crt-text-dim font-mono text-2xl">?</div>
                <p className="font-mono text-xs text-crt-text-dim uppercase">
                  {t("resizer.status")}
                </p>
              </div>

              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="crt-input w-full p-4 font-mono text-sm"
                placeholder={t("resizer.placeholder")}
              />
              <button
                onClick={handleResize}
                className="crt-btn w-full py-3 mt-5 font-mono text-sm"
              >
                {t("resizer.button")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
