"use client";

import { useState, useEffect } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function RelativityPage() {
  const { executeSlop } = useSlop();
  const { t } = useLang();
  const [time, setTime] = useState("");
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleQuery = async () => {
    setLoading(true);
    const result = await executeSlop(t("relativity.title"), t("relativity.prompt", time));
    setSlop(result);
    setLoading(false);
  };

  return (
    <div className="min-h-full">
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
        <Link href="/" className="hover:underline">root@ai-slops:~$</Link> cd ./relativity
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="border-[5px] border-black bg-white w-full lg:w-[600px] brutal-shadow-lg">
            <div className="border-b-[3px] border-black px-4 py-2 bg-black text-white font-mono text-[10px] uppercase">
              RELATIVITY.EXE
            </div>
            <div className="p-6 text-center">
              <h2 className="brutal-heading text-4xl mb-6">{t("relativity.title")}</h2>

              <div className="border-[5px] border-black p-10 mb-6 bg-gray-100 font-display text-7xl">
                {time || "00:00:00"}
              </div>

              <button onClick={handleQuery} className="brutal-btn w-full">
                {t("relativity.button")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
