"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function PhotonPage() {
  const { executeSlop, isDark, setIsDark } = useSlop();
  const { t } = useLang();
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    const mode = isDark ? "LIGHT" : "DARK";
    const result = await executeSlop(t("photon.title"), t("photon.prompt", mode));
    setSlop(result);
    setLoading(false);
    if (result.includes("ONAYLANDI")) {
      setIsDark(!isDark);
    }
  };

  return (
    <div className="min-h-full">
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
        <Link href="/" className="hover:underline">root@ai-slops:~$</Link> cd ./photon
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="border-[5px] border-black bg-white w-full lg:w-[600px] brutal-shadow-lg">
            <div className="border-b-[3px] border-black px-4 py-2 bg-black text-white font-mono text-[10px] uppercase">
              PHOTON.EXE
            </div>
            <div className="p-6">
              <h2 className="brutal-heading text-4xl mb-6">{t("photon.title")}</h2>

              <div className="flex items-center justify-center h-44 mb-6">
                <div
                  className={`w-28 h-28 border-[5px] border-black transition-all duration-500 ${
                    isDark ? "bg-white" : "bg-[#ff0000] shadow-[8px_8px_0px_#000000]"
                  }`}
                />
              </div>

              <button onClick={handleToggle} className="brutal-btn w-full">
                {isDark ? t("photon.button.on") : t("photon.button.off")}
              </button>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
