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
    <div className={`min-h-full p-8 ${isDark ? 'bg-zinc-950' : 'bg-[#f4f4f0]'} flex flex-col items-center gap-8`}>
      <div className="w-full max-w-7xl">
        <Link href="/" className="inline-block border-8 border-black p-4 bg-[#ffea00] text-black font-black uppercase hover:bg-black hover:text-white transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
          {t("back")}
        </Link>
      </div>

      <div className="flex flex-col md:row gap-12 items-start w-full max-w-5xl">
        <div className={`border-8 ${isDark ? 'border-white bg-zinc-800' : 'border-black bg-white'} p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-full md:w-[600px]`}>
          <h2 className="text-3xl font-black uppercase mb-6">{t("counter.title")}</h2>
          <div className="mb-6">
            <input 
              type="text"
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              className={`w-full p-4 border-4 border-black font-mono focus:ring-8 focus:ring-yellow-500 outline-none ${isDark ? 'bg-zinc-900 text-white border-white' : 'bg-gray-50 text-black'}`}
               placeholder={t("counter.placeholder")}
            />
            <div className="mt-4 flex justify-between font-black uppercase text-xl">
                <span>{t("counter.label")}</span>
               <span>{input.length}</span>
            </div>
          </div>
          <button 
            onClick={handleCount}
            className={`w-full py-4 border-4 border-black font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            {t("counter.button")}
          </button>
        </div>

        <SlopPanel slop={slop} loading={loading} />
      </div>
    </div>
  );
}
