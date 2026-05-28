"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function CalcPage() {
  const { executeSlop, isDark } = useSlop();
  const { t } = useLang();
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);
  const [slop, setSlop] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNumber = (num: string) => {
    if (waitingForSecondNumber) {
      setDisplay(num);
      setWaitingForSecondNumber(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);
    if (firstNumber === null) {
      setFirstNumber(inputValue);
    } else if (operator) {
      const result = performCalculation[operator](firstNumber, inputValue);
      setDisplay(String(result));
      setFirstNumber(result);
    }
    setWaitingForSecondNumber(true);
    setOperator(nextOperator);
  };

  const performCalculation: Record<string, (a: number, b: number) => number> = {
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  const calculate = async () => {
    const inputValue = parseFloat(display);
    if (operator && firstNumber !== null) {
      const result = performCalculation[operator](firstNumber, inputValue);
      const fullOp = `${firstNumber} ${operator} ${inputValue}`;
      setDisplay(String(result));
      setFirstNumber(null);
      setOperator(null);
      setWaitingForSecondNumber(false);
      setLoading(true);
      const slopText = await executeSlop(t("calc.title"), t("calc.prompt", fullOp, result));
      setSlop(slopText);
      setLoading(false);
    }
  };

  const clear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setWaitingForSecondNumber(false);
    setSlop("");
  };

  const btnClass = "font-display text-2xl py-3 px-4 border border-crt-border bg-crt-surface text-crt-green hover:border-crt-green-dim hover:bg-crt-surface-2 transition-all duration-300 cursor-pointer";
  const opClass = `${btnClass} text-crt-amber border-crt-amber-dim hover:border-crt-amber`;
  const eqClass = `${btnClass} text-crt-green border-crt-green hover:bg-crt-green/10 row-span-2`;
  const clearClass = `${btnClass} col-span-2 text-crt-red border-crt-red/30 hover:border-crt-red hover:bg-crt-red/10`;

  return (
    <div className="min-h-full p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs text-crt-text-dim hover:text-crt-green transition-colors mb-8 group">
          <span className="text-crt-green opacity-50 group-hover:opacity-100 transition-opacity">$</span>
          <span>{t("back")}</span>
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Calculator */}
          <div className="terminal-card w-full lg:w-80 shrink-0">
            <div className="terminal-card-content p-5">
              {/* Display */}
              <div className="bg-crt-bg border border-crt-border p-4 mb-5 text-right">
                <div className="font-display text-4xl text-crt-green glow-green truncate">
                  {display}
                </div>
              </div>

              {/* Buttons grid */}
              <div className="grid grid-cols-4 gap-2">
                <button onClick={clear} className={clearClass}>{t("calc.clear")}</button>
                <button onClick={() => handleOperator("/")} className={opClass}>/</button>
                <button onClick={() => handleOperator("*")} className={opClass}>*</button>

                {[7, 8, 9].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btnClass}>{n}</button>)}
                <button onClick={() => handleOperator("-")} className={opClass}>-</button>

                {[4, 5, 6].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btnClass}>{n}</button>)}
                <button onClick={() => handleOperator("+")} className={opClass}>+</button>

                {[1, 2, 3].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btnClass}>{n}</button>)}
                <button onClick={calculate} className={eqClass}>=</button>

                <button onClick={() => handleNumber("0")} className={`${btnClass} col-span-2`}>0</button>
                <button onClick={() => handleNumber(".")} className={btnClass}>.</button>
              </div>
            </div>
          </div>

          {/* Slop Panel */}
          <div className="flex-grow w-full">
            <SlopPanel slop={slop} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
