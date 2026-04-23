"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function ConverterPage() {
  const { executeSlop, isDark } = useSlop();
  const [meters, setMeters] = useState("");
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!meters) return;
    setLoading(true);
    const cm = parseFloat(meters) * 100;
    const result = await executeSlop("Quantum Unit Conversion", `Convert ${meters} meters to ${cm} centimeters using Quantum Field Theory. Explain how the measurement collapses the wave function of the distance.`);
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

      <div className="flex flex-col md:row gap-12 items-start w-full max-w-5xl">
        <div className={`border-8 ${isDark ? 'border-white bg-zinc-800' : 'border-black bg-white'} p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-full md:w-[600px]`}>
          <h2 className="text-3xl font-black uppercase mb-6">QFT Converter</h2>
          <div className="flex gap-4 mb-6">
            <div className="flex-grow">
              <label className="block font-black uppercase text-xs mb-2">Meters</label>
              <input 
                type="number"
                value={meters} 
                onChange={(e) => setMeters(e.target.value)}
                className={`w-full p-4 border-4 border-black font-mono focus:ring-8 focus:ring-green-500 outline-none ${isDark ? 'bg-zinc-900 text-white border-white' : 'bg-gray-50 text-black'}`}
                placeholder="1.0"
              />
            </div>
            <div className="flex items-end pb-4 font-black text-2xl">→</div>
            <div className="flex-grow">
              <label className="block font-black uppercase text-xs mb-2">Centimeters</label>
              <div className={`w-full p-4 border-4 border-black font-mono h-[60px] flex items-center ${isDark ? 'bg-zinc-900/50 border-white opacity-50' : 'bg-gray-200 border-black opacity-50'}`}>
                {meters ? parseFloat(meters) * 100 : "?"}
              </div>
            </div>
          </div>
          <button 
            onClick={handleConvert}
            className={`w-full py-4 border-4 border-black font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            VALIDATE QUANTUM FIELD
          </button>
        </div>

        <SlopPanel slop={slop} loading={loading} />
      </div>
    </div>
  );
}
