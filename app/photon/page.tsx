"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function PhotonPage() {
  const { executeSlop, isDark, setIsDark } = useSlop();
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    const mode = isDark ? "LIGHT" : "DARK";
    const result = await executeSlop("Photon Emission Approval", `The user wants to switch to ${mode} mode. Assess photon emission approval and return SONUÇ: ONAYLANDI if safe. Include a complex explanation about photon entropy.`);
    setSlop(result);
    setLoading(false);
    
    if (result.includes("ONAYLANDI")) {
      setIsDark(!isDark);
    }
  };

  return (
    <div className={`min-h-full p-8 ${isDark ? 'bg-zinc-950' : 'bg-[#f4f4f0]'} flex flex-col items-center gap-8`}>
      <div className="w-full max-w-7xl">
        <Link href="/" className="inline-block border-8 border-black p-4 bg-[#ffea00] text-black font-black uppercase hover:bg-black hover:text-white transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
          ← BACK TO DASHBOARD
        </Link>
      </div>

      <div className="flex flex-col md:row gap-12 items-start w-full max-w-5xl">
        <div className={`border-8 ${isDark ? 'border-white bg-zinc-800' : 'border-black bg-white'} p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-full md:w-[600px]`}>
          <h2 className="text-3xl font-black uppercase mb-6">Photon Control</h2>
          <div className="flex items-center justify-center h-48 mb-6">
             <div className={`w-32 h-32 rounded-full border-8 border-black ${isDark ? 'bg-zinc-900 shadow-[0_0_50px_rgba(255,255,255,0.2)]' : 'bg-[#ffea00] shadow-[0_0_50px_rgba(255,234,0,0.5)]'} transition-all duration-1000`}></div>
          </div>
          <button 
            onClick={handleToggle}
            className={`mt-6 w-full py-4 border-4 border-black font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            REQUEST EMISSION {isDark ? "DECREASE" : "INCREASE"}
          </button>
        </div>

        <SlopPanel slop={slop} loading={loading} />
      </div>
    </div>
  );
}
