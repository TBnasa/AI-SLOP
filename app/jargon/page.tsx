"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function JargonPage() {
  const { executeSlop, isDark } = useSlop();
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await executeSlop("Universal Jargon Generation", "Generate a paragraph of pure, meaningless technological jargon about quantum neural networks and blockchain entropy.");
    setSlop(result);
    setLoading(false);
  };

  return (
    <div className={`min-h-full p-8 ${isDark ? 'bg-zinc-950' : 'bg-[#f4f4f0]'} flex flex-col items-center gap-8`}>
      <div className="w-full max-w-7xl">
        <Link href="/" className="inline-block border-8 border-black p-4 bg-[#ffea00] text-black font-black uppercase hover:bg-black hover:text-white transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
          ← BACK TO DASHBOARD
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start w-full max-w-5xl">
        <div className={`border-8 ${isDark ? 'border-white bg-zinc-800' : 'border-black bg-white'} p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-full md:w-[600px] text-center`}>
          <h2 className="text-3xl font-black uppercase mb-6">Jargon Gen</h2>
          <div className="border-8 border-black p-12 mb-8 bg-purple-600 text-white text-xl font-black italic shadow-[inset_4px_4px_0px_rgba(0,0,0,0.5)]">
            READY TO GENERATE SLOP
          </div>
          <button 
            onClick={handleGenerate}
            className={`w-full py-4 border-4 border-black font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            GENERATE UNIVERSAL JARGON
          </button>
        </div>

        <SlopPanel slop={slop} loading={loading} />
      </div>
    </div>
  );
}
