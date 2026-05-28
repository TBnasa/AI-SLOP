"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function ResizerPage() {
  const { executeSlop } = useSlop();
  const { t } = useLang();
  const [fileName, setFileName] = useState("");
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResize = async () => {
    if (!fileName) return;
    setLoading(true);
    const result = await executeSlop(t("resizer.title"), t("resizer.prompt", fileName));
    setSlop(result); setLoading(false);
  };

  return (
    <div className="min-h-full">
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
        <Link href="/" className="hover:underline">root@ai-slops:~$</Link> cd ./resizer
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="border-[5px] border-black bg-white w-full lg:w-[600px] brutal-shadow-lg">
            <div className="border-b-[3px] border-black px-4 py-2 bg-[#9900ff] text-white font-mono text-[10px] uppercase">
              RESIZER.EXE
            </div>
            <div className="p-6">
              <h2 className="brutal-heading text-4xl mb-6">{t("resizer.title")}</h2>
              <div className="border-[3px] border-black border-dashed p-12 mb-5 flex flex-col items-center justify-center gap-3 bg-gray-50">
                <div className="font-display text-5xl text-gray-300">?</div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">{t("resizer.status")}</p>
              </div>
              <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} className="brutal-input w-full text-sm" placeholder={t("resizer.placeholder")} />
              <button onClick={handleResize} className="brutal-btn brutal-btn-purple w-full mt-5">{t("resizer.button")}</button>
            </div>
          </div>
          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
