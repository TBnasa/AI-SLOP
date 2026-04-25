"use client";

import { useSlop } from "@/context/SlopContext";

interface SlopPanelProps {
  slop: string;
  loading: boolean;
}

export default function SlopPanel({ slop, loading }: SlopPanelProps) {
  const { isDark } = useSlop();

  return (
    <div className={`mt-8 border-8 ${isDark ? 'border-white bg-zinc-800' : 'border-black bg-white'} p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full`}>
      <div className="flex justify-between items-center border-b-4 border-black mb-4 pb-2">
        <h4 className="font-black uppercase text-xl">AI Slop Panel</h4>
        {loading && <div className="w-4 h-4 bg-green-500 animate-ping"></div>}
      </div>
      <div className="font-mono text-sm min-h-[100px] whitespace-pre-wrap">
        {loading ? (
          <span className="animate-pulse">Calculating with Neural Overkill... Inference in progress...</span>
        ) : (
          slop || "Awaiting action for unnecessary technical analysis."
        )}
      </div>
      {!loading && slop && (
        <div className="mt-4 pt-2 border-t-2 border-black/10 text-[10px] uppercase font-bold opacity-50">
          Verified by Nemotron-3-Nano (Low Latency Slop)
        </div>
      )}
    </div>
  );
}
