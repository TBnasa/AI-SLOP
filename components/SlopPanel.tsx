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
    <div className="mt-8 terminal-card max-w-2xl w-full">
      <div className="terminal-card-content p-6">
        {/* Panel header */}
        <div className="flex items-center gap-3 border-b border-crt-border pb-4 mb-4">
          <div className="text-crt-green font-display text-lg glow-green">
            {t("slopPanel.title")}
          </div>
          {loading && (
            <div className="flex items-center gap-2 text-crt-amber font-mono text-xs glow-amber">
              <div className="w-2 h-2 rounded-full bg-crt-amber animate-pulse" />
              PROCESSING
            </div>
          )}
        </div>

        {/* Content area */}
        <div className="font-mono text-sm min-h-[100px] whitespace-pre-wrap leading-relaxed">
          {loading ? (
            <div className="space-y-2">
              <div className="text-crt-green glow-green animate-pulse">
                {t("slopPanel.loading")}
              </div>
              <div className="flex gap-1">
                <span className="text-crt-amber glow-amber">[</span>
                <div className="flex gap-1 items-center">
                  <div className="w-1.5 h-4 bg-crt-green slow-spinner" style={{ animationDuration: "2s" }} />
                  <div className="w-1.5 h-4 bg-crt-green slow-spinner" style={{ animationDuration: "3s" }} />
                  <div className="w-1.5 h-4 bg-crt-green slow-spinner" style={{ animationDuration: "4s" }} />
                </div>
                <span className="text-crt-amber glow-amber">]</span>
              </div>
            </div>
          ) : (
            <div className="text-crt-text">
              {slop || (
                <span className="text-crt-text-dim italic">
                  {t("slopPanel.default")}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {!loading && slop && (
          <div className="mt-4 pt-3 border-t border-crt-border text-[10px] text-crt-text-dim font-mono uppercase tracking-widest">
            {t("slopPanel.footer")}
          </div>
        )}
      </div>
    </div>
  );
}
