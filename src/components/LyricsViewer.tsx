"use client";

import React, { useState } from "react";
import { AlignLeft, AlignCenter, Sun, Moon, BookOpen, Type } from "lucide-react";

interface LyricsViewerProps {
  verses: string[];
  chorus?: string;
}

export default function LyricsViewer({ verses, chorus }: LyricsViewerProps) {
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("lg");
  const [alignment, setAlignment] = useState<"left" | "center">("left");
  const [theme, setTheme] = useState<"light" | "sepia" | "dark">("light");

  const fontSizes = {
    sm: "text-base md:text-lg leading-relaxed",
    base: "text-lg md:text-xl leading-relaxed",
    lg: "text-xl md:text-2xl leading-loose",
    xl: "text-2xl md:text-3xl leading-loose",
  };

  const themeStyles = {
    light: "bg-white text-stone-900 border-stone-200 shadow-xs",
    sepia: "bg-[#FBF8F2] text-amber-950 border-amber-200/60 shadow-xs",
    dark: "bg-[#1C1917] text-stone-100 border-stone-800 shadow-xl",
  };

  return (
    <div className="space-y-6">
      {/* Customization Toolbar */}
      <div className="bg-white border border-stone-200/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-2">
          <Type className="w-4 h-4 text-stone-400 hidden sm:block" />
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 mr-2">Saiz Dak:</span>
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            {(["sm", "base", "lg", "xl"] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setFontSize(size)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  fontSize === size ? "bg-white text-stone-900 shadow-xs font-bold" : "text-stone-600 hover:text-stone-900"
                }`}
                aria-label={`Pynkylla saiz dak sha ${size}`}
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Alignment */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setAlignment("left")}
              className={`p-1.5 rounded-lg transition-all ${
                alignment === "left" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Pynbeit sha kadiang"
            >
              <AlignLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setAlignment("center")}
              className={`p-1.5 rounded-lg transition-all ${
                alignment === "center" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Pynbeit sha pdeng"
            >
              <AlignCenter className="w-4 h-4" />
            </button>
          </div>

          {/* Theme */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-all ${
                theme === "light" ? "bg-white text-stone-900 shadow-xs font-bold" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Phngain theme"
            >
              <Sun className="w-3.5 h-3.5" /> Phngain
            </button>
            <button
              type="button"
              onClick={() => setTheme("sepia")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-all ${
                theme === "sepia" ? "bg-amber-100 text-amber-950 shadow-xs font-bold" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Stem theme"
            >
              <BookOpen className="w-3.5 h-3.5" /> Stem
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-all ${
                theme === "dark" ? "bg-stone-800 text-white shadow-xs font-bold" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Dum theme"
            >
              <Moon className="w-3.5 h-3.5" /> Dum
            </button>
          </div>
        </div>
      </div>

      {/* Lyrics Display */}
      <div className={`border rounded-3xl p-8 md:p-12 transition-all duration-300 ${themeStyles[theme]}`}>
        <div className={`font-serif max-w-3xl mx-auto space-y-10 ${alignment === "center" ? "text-center" : "text-left"}`}>
          {verses.map((verse, idx) => (
            <div key={idx} className="space-y-4 group">
              <span className="text-xs font-mono font-bold text-amber-700/80 uppercase tracking-widest block mb-2 select-none opacity-60 group-hover:opacity-100 transition-opacity">
                Dkhot {idx + 1}
              </span>
              <p className={`${fontSizes[fontSize]} whitespace-pre-line tracking-wide`}>
                {verse}
              </p>
            </div>
          ))}

          {chorus && (
            <div className="my-12 p-6 md:p-8 bg-amber-50/40 border-y border-amber-200/60 rounded-2xl space-y-4 group">
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block mb-2 select-none">
                Korus
              </span>
              <p className={`${fontSizes[fontSize]} whitespace-pre-line tracking-wide font-medium italic text-amber-950`}>
                {chorus}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
