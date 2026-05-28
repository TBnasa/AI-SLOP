"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function EditorPage() {
  const { executeSlop } = useSlop();
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
    <div className="min-h-full">
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
        <Link href="/" className="hover:underline">root@ai-slops:~$</Link> cd ./editor
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="border-[5px] border-black bg-white w-full lg:w-[600px] brutal-shadow-lg">
            <div className="border-b-[3px] border-black px-4 py-2 bg-black text-white font-mono text-[10px] uppercase">
              EDITOR.EXE
            </div>
            <div className="p-6">
              <h2 className="brutal-heading text-4xl mb-6">{t("editor.title")}</h2>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="brutal-input w-full h-56 resize-none text-sm"
                placeholder={t("editor.placeholder")}
              />
              <button onClick={handleAnalyze} className="brutal-btn w-full mt-5">
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
