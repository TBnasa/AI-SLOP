"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function CounterPage() {
  const { executeSlop } = useSlop();
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
    <div className="min-h-full">
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
        <Link href="/" className="hover:underline">root@ai-slops:~$</Link> cd ./counter
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="border-[5px] border-black bg-white w-full lg:w-[600px] brutal-shadow-lg">
            <div className="border-b-[3px] border-black px-4 py-2 bg-black text-white font-mono text-[10px] uppercase">
              COUNTER.EXE
            </div>
            <div className="p-6">
              <h2 className="brutal-heading text-4xl mb-6">{t("counter.title")}</h2>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="brutal-input w-full text-sm mb-4"
                placeholder={t("counter.placeholder")}
              />

              <div className="flex justify-between items-center border-[3px] border-black px-4 py-3 bg-gray-50 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-widest">{t("counter.label")}</span>
                <span className="font-display text-4xl">{input.length}</span>
              </div>

              <button onClick={handleCount} className="brutal-btn w-full">
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
