"use client";

import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";

interface SlopPanelProps {
  slop: string;
  loading: boolean;
}

export default function SlopPanel({ slop, loading }: SlopPanelProps) {
  const { isDark } = useSlop();
  const { t } = useLang();

  return (
    <div className="mt-8 border-[5px] border-black bg-white max-w-2xl w-full brutal-shadow-lg">
      {/* Panel header */}
      <div className="flex items-center justify-between border-b-[3px] border-black px-5 py-3 bg-black text-white">
        <span className="font-display text-2xl uppercase tracking-wider">
          {t("slopPanel.title")}
        </span>
        {loading && (
          <span className="font-mono text-[10px] uppercase bg-white text-black px-2 py-1 animate-pulse">
            PROCESSING
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 min-h-[120px]">
        {loading ? (
          <div className="space-y-3">
            <div className="font-mono text-sm text-black animate-pulse">
              {t("slopPanel.loading")}
            </div>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-black animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-3 h-3 bg-black animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-3 h-3 bg-black animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        ) : (
          <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-black">
            {slop || (
              <span className="text-gray-400 italic">
                {t("slopPanel.default")}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {!loading && slop && (
        <div className="border-t-[3px] border-black px-5 py-2 bg-gray-100 font-mono text-[9px] uppercase tracking-widest">
          {t("slopPanel.footer")}
        </div>
      )}
    </div>
  );
}
