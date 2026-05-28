"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function EditorPage() {
  const { executeSlop, isDark } = useSlop();
  const { t } = useLang();
  const [text, setText] = useState("");
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text) return;
    setLoading(true);
    const result = await executeSlop(t("editor.title"), t("editor.prompt", text));
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
                {t("editor.title")}
              </h2>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="crt-input w-full h-56 p-4 font-mono text-sm resize-none"
                placeholder={t("editor.placeholder")}
              />
              <button
                onClick={handleAnalyze}
                className="crt-btn w-full py-3 mt-5 font-mono text-sm"
              >
                {t("editor.button")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
