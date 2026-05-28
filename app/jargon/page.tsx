"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function JargonPage() {
  const { executeSlop } = useSlop();
  const { t } = useLang();
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await executeSlop(t("jargon.title"), t("jargon.prompt"));
    setSlop(result);
    setLoading(false);
  };

  return (
    <div className="min-h-full">
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
        <Link href="/" className="hover:underline">root@ai-slops:~$</Link> cd ./jargon
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="border-[5px] border-black bg-white w-full lg:w-[600px] brutal-shadow-lg">
            <div className="border-b-[3px] border-black px-4 py-2 bg-black text-white font-mono text-[10px] uppercase">
              JARGON.EXE
            </div>
            <div className="p-6 text-center">
              <h2 className="brutal-heading text-4xl mb-6">{t("jargon.title")}</h2>

              <div className="border-[5px] border-black p-10 mb-6 bg-black text-white font-display text-2xl italic">
                {t("jargon.display")}
              </div>

              <button onClick={handleGenerate} className="brutal-btn w-full">
                {t("jargon.button")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
