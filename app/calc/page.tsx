"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function CalcPage() {
  const { executeSlop } = useSlop();
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

  const btn = "font-display text-2xl py-3 border-[3px] border-black bg-white text-black hover:bg-black hover:text-white transition-all cursor-pointer active:translate-x-0 active:translate-y-0 active:shadow-none";
  const opBtn = `${btn} bg-black text-white hover:bg-white hover:text-black`;
  const eqBtn = `${btn} bg-[#00aa00] text-white row-span-2 hover:bg-[#008800]`;
  const clearBtn = `${btn} col-span-2 bg-[#ff0000] text-white hover:bg-[#cc0000]`;

  return (
    <div className="min-h-full">
      <div className="border-b-[3px] border-black bg-gray-100 px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
        <Link href="/" className="hover:underline">root@ai-slops:~$</Link> cd ./calc
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Calculator */}
          <div className="border-[5px] border-black bg-white w-full lg:w-80 shrink-0 brutal-shadow-lg">
            <div className="border-b-[3px] border-black px-4 py-2 bg-black text-white font-mono text-[10px] uppercase">
              CALC.EXE
            </div>
            <div className="p-4">
              {/* Display */}
              <div className="border-[3px] border-black bg-white p-4 mb-4 text-right">
                <div className="font-display text-5xl text-black truncate">{display}</div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-4 gap-[2px]">
                <button onClick={clear} className={clearBtn}>{t("calc.clear")}</button>
                <button onClick={() => handleOperator("/")} className={opBtn}>/</button>
                <button onClick={() => handleOperator("*")} className={opBtn}>*</button>

                {[7, 8, 9].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btn}>{n}</button>)}
                <button onClick={() => handleOperator("-")} className={opBtn}>-</button>

                {[4, 5, 6].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btn}>{n}</button>)}
                <button onClick={() => handleOperator("+")} className={opBtn}>+</button>

                {[1, 2, 3].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btn}>{n}</button>)}
                <button onClick={calculate} className={eqBtn}>=</button>

                <button onClick={() => handleNumber("0")} className={`${btn} col-span-2`}>0</button>
                <button onClick={() => handleNumber(".")} className={btn}>.</button>
              </div>
            </div>
          </div>

          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
