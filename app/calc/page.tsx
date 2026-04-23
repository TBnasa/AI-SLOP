"use client";

import { useState } from "react";
import { useSlop } from "@/context/SlopContext";
import Link from "next/link";
import SlopPanel from "@/components/SlopPanel";

export default function CalcPage() {
  const { executeSlop, isDark } = useSlop();
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
      const slopText = await executeSlop("Legacy Calculation", `The user calculated "${fullOp}" and got "${result}". Explain the atomic weight of these numbers and the quantum latency of this operation.`);
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

  const btnClass = `font-bold py-4 border-4 border-black transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isDark ? 'bg-zinc-700 border-white text-white' : 'bg-white text-black'}`;

  return (
    <div className={`min-h-full p-8 ${isDark ? 'bg-zinc-950' : 'bg-[#f4f4f0]'} flex flex-col items-center gap-8`}>
      <div className="w-full max-w-7xl">
        <Link href="/" className="inline-block border-8 border-black p-4 bg-[#ffea00] text-black font-black uppercase hover:bg-black hover:text-white transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
          ← BACK TO DASHBOARD
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start w-full max-w-5xl">
        {/* Calc UI */}
        <div className={`border-8 ${isDark ? 'border-white bg-zinc-800' : 'border-black bg-white'} p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-80 shrink-0`}>
          <div className="bg-black text-white p-4 mb-6 font-mono text-3xl text-right overflow-hidden h-20 flex items-center justify-end">
            {display}
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button onClick={clear} className={`${btnClass} col-span-2 bg-red-500 text-white`}>CLEAR</button>
            <button onClick={() => handleOperator("/")} className={btnClass}>/</button>
            <button onClick={() => handleOperator("*")} className={btnClass}>*</button>
            
            {[7, 8, 9].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btnClass}>{n}</button>)}
            <button onClick={() => handleOperator("-")} className={btnClass}>-</button>
            
            {[4, 5, 6].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btnClass}>{n}</button>)}
            <button onClick={() => handleOperator("+")} className={btnClass}>+</button>
            
            {[1, 2, 3].map(n => <button key={n} onClick={() => handleNumber(n.toString())} className={btnClass}>{n}</button>)}
            <button onClick={calculate} className={`${btnClass} row-span-2 bg-green-500 text-white`}>=</button>
            
            <button onClick={() => handleNumber("0")} className={`${btnClass} col-span-2`}>0</button>
            <button onClick={() => handleNumber(".")} className={btnClass}>.</button>
          </div>
        </div>

        {/* Slop Panel */}
        <div className="flex-grow w-full">
          <SlopPanel slop={slop} loading={loading} />
        </div>
      </div>
    </div>
  );
}
