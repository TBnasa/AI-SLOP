"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function ConverterPage() {
  const { executeSlop } = useSlop();
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
    <div className="min-h-full">
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
        <Link href="/" className="hover:underline">root@ai-slops:~$</Link> cd ./converter
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="border-[5px] border-black bg-white w-full lg:w-[600px] brutal-shadow-lg">
            <div className="border-b-[3px] border-black px-4 py-2 bg-black text-white font-mono text-[10px] uppercase">
              CONVERTER.EXE
            </div>
            <div className="p-6">
              <h2 className="brutal-heading text-4xl mb-6">{t("converter.title")}</h2>

              <div className="flex gap-4 mb-5">
                <div className="flex-grow">
                  <label className="block font-mono text-[10px] uppercase tracking-widest mb-2">
                    {t("converter.labelFrom")}
                  </label>
                  <input
                    type="number"
                    value={meters}
                    onChange={(e) => setMeters(e.target.value)}
                    className="brutal-input w-full text-sm"
                    placeholder={t("converter.placeholder")}
                  />
                </div>
                <div className="flex items-end pb-4 font-display text-3xl">→</div>
                <div className="flex-grow">
                  <label className="block font-mono text-[10px] uppercase tracking-widest mb-2">
                    {t("converter.labelTo")}
                  </label>
                  <div className="brutal-input w-full h-[52px] flex items-center bg-gray-100 text-gray-400 text-sm">
                    {meters ? parseFloat(meters) * 100 : "?"}
                  </div>
                </div>
              </div>

              <button onClick={handleConvert} className="brutal-btn w-full">
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
