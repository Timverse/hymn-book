"use client";

import React, { useState } from "react";
import { AlignLeft, AlignCenter, Sun, Moon, BookOpen, Type, CloudDownload, CheckCircle, WifiOff, Loader2 } from "lucide-react";
import { useAppNetwork } from "@/context/NetworkContext";
import { UnityAdsService } from "@/services/UnityAdsService";

interface LyricsViewerProps {
  verses: string[];
  chorus?: string;
  hymnId: string;
  hymnTitle: string;
}

export default function LyricsViewer({ verses, chorus, hymnId, hymnTitle }: LyricsViewerProps) {
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("lg");
  const [alignment, setAlignment] = useState<"left" | "center">("left");
  const [theme, setTheme] = useState<"light" | "sepia" | "dark">("light");
  const [isDownloading, setIsDownloading] = useState(false);
  const { isOnline, isHymnDownloaded, downloadHymn } = useAppNetwork();

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

  const downloaded = isHymnDownloaded(hymnId);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (downloaded) return;

    if (!isOnline) {
      alert("Internet connection required to download songs.");
      return;
    }

    setIsDownloading(true);
    UnityAdsService.showRewardedAd(
      () => {
        downloadHymn(hymnId);
        setIsDownloading(false);
        alert("Song downloaded successfully for offline use!");
      },
      (errorMsg) => {
        setIsDownloading(false);
        alert(errorMsg);
      }
    );
  };

  // If offline and song is not downloaded, show offline fallback UI
  if (!isOnline && !downloaded) {
    return (
      <div className="bg-white border border-stone-200/80 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-lg mx-auto space-y-6 shadow-xs animate-fadeIn">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center mx-auto shadow-2xs">
          <WifiOff className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">Online Connection Required</h3>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            This song (&ldquo;<strong className="text-stone-800">{hymnTitle}</strong>&rdquo;) has not been downloaded for offline use. Please connect to the internet to view the lyrics and download the song.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-md"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Customization Toolbar */}
      <div className="bg-white border border-stone-200/80 rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 shadow-xs">
        <div className="flex items-center justify-between sm:justify-start gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4 text-stone-400 hidden sm:block" />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 mr-1 sm:mr-2">Font Size:</span>
          </div>
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            {(["sm", "base", "lg", "xl"] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setFontSize(size)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  fontSize === size ? "bg-white text-stone-900 shadow-xs font-bold" : "text-stone-600 hover:text-stone-900"
                }`}
                aria-label={`Change font size to ${size}`}
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Download Action Button */}
          <div className="flex items-center gap-2 border-l border-stone-200 pl-4 ml-2">
            {downloaded ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Available Offline
              </span>
            ) : (
              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-800 text-white text-xs font-semibold hover:bg-amber-700 transition-colors shadow-xs disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-600"
              >
                {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CloudDownload className="w-4 h-4" />}
                Download for Offline
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4 sm:gap-6">
          {/* Alignment */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setAlignment("left")}
              className={`p-2 rounded-lg transition-all ${
                alignment === "left" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Align Left"
            >
              <AlignLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setAlignment("center")}
              className={`p-2 rounded-lg transition-all ${
                alignment === "center" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Align Center"
            >
              <AlignCenter className="w-4 h-4" />
            </button>
          </div>

          {/* Theme */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl flex-1 sm:flex-initial justify-center">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                theme === "light" ? "bg-white text-stone-900 shadow-xs font-bold" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Light theme"
            >
              <Sun className="w-3.5 h-3.5" /> Light
            </button>
            <button
              type="button"
              onClick={() => setTheme("sepia")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                theme === "sepia" ? "bg-amber-100 text-amber-950 shadow-xs font-bold" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Sepia theme"
            >
              <BookOpen className="w-3.5 h-3.5" /> Sepia
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                theme === "dark" ? "bg-stone-800 text-white shadow-xs font-bold" : "text-stone-600 hover:text-stone-900"
              }`}
              aria-label="Dark theme"
            >
              <Moon className="w-3.5 h-3.5" /> Dark
            </button>
          </div>
        </div>
      </div>

      {/* Lyrics Display */}
      <div className={`border rounded-3xl p-6 sm:p-10 md:p-16 transition-all duration-300 ${themeStyles[theme]}`}>
        <div className={`font-serif max-w-4xl mx-auto space-y-10 sm:space-y-12 ${alignment === "center" ? "text-center" : "text-left"}`}>
          {verses.map((verse, idx) => (
            <React.Fragment key={idx}>
              <div className="space-y-4 group">
                <span className="text-xs font-mono font-bold text-amber-700/80 uppercase tracking-widest block mb-2 select-none opacity-60 group-hover:opacity-100 transition-opacity">
                  Verse {idx + 1}
                </span>
                <p className={`${fontSizes[fontSize]} whitespace-pre-line tracking-wide`}>
                  {verse}
                </p>
              </div>

              {chorus && (
                <div className="my-8 p-6 sm:p-8 bg-amber-50/40 border-y border-amber-200/60 rounded-3xl space-y-3 group shadow-2xs">
                  <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block mb-1 select-none opacity-80">
                    Chorus
                  </span>
                  <p className={`${fontSizes[fontSize]} whitespace-pre-line tracking-wide font-medium italic text-amber-950`}>
                    {chorus}
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
