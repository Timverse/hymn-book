"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Hymn } from "@/data/hymns";
import { Heart, ArrowRight, Bookmark, CloudDownload, CheckCircle, Loader2 } from "lucide-react";
import { useAppNetwork } from "@/context/NetworkContext";
import { AdMobService } from "@/services/AdMobService";

interface HymnCardProps {
  hymn: Hymn;
  onFavoriteChange?: () => void;
}

export default function HymnCard({ hymn, onFavoriteChange }: HymnCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { isOnline, isHymnDownloaded, downloadHymn } = useAppNetwork();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("canticle_favorites");
      if (stored) {
        const favs: string[] = JSON.parse(stored);
        setIsFavorite(favs.includes(hymn.id));
      }
    } catch (e) {
      console.error("Failed to read favorites", e);
    }
  }, [hymn.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const stored = localStorage.getItem("canticle_favorites");
      let favs: string[] = stored ? JSON.parse(stored) : [];
      if (favs.includes(hymn.id)) {
        favs = favs.filter((id) => id !== hymn.id);
        setIsFavorite(false);
      } else {
        favs.push(hymn.id);
        setIsFavorite(true);
      }
      localStorage.setItem("canticle_favorites", JSON.stringify(favs));
      window.dispatchEvent(new Event("favorites_updated"));
      if (onFavoriteChange) {
        onFavoriteChange();
      }
    } catch (e) {
      console.error("Failed to update favorites", e);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isHymnDownloaded(hymn.id)) return;

    if (!isOnline) {
      alert("Internet connection required to download songs.");
      return;
    }

    setIsDownloading(true);
    AdMobService.showRewardedAd(
      () => {
        downloadHymn(hymn.id);
        setIsDownloading(false);
        alert("Song downloaded successfully for offline use!");
      },
      (errorMsg) => {
        setIsDownloading(false);
        alert(errorMsg);
      }
    );
  };

  const firstVerseSnippet = hymn.verses[0]?.split("\n").slice(0, 2).join(" ") || "";
  const downloaded = isHymnDownloaded(hymn.id);

  return (
    <Link
      href={`/hymn/${hymn.id}`}
      className="group relative flex flex-col bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-amber-600/40 active:scale-[0.99] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
      aria-label={`Peit ia ka jingrwai ${hymn.number}: ${hymn.title}`}
    >
      {/* Top Bar: Number & Actions */}
      <div className="flex items-center justify-between mb-4 sm:mb-5 gap-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-700 font-mono text-xs sm:text-sm font-bold tracking-wider group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors shadow-2xs">
          <Bookmark className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" /> #{hymn.number}
        </span>

        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Download Button */}
          {downloaded ? (
            <span className="p-2 rounded-full bg-emerald-50 text-emerald-700 flex items-center gap-1 text-xs font-semibold shadow-2xs" title="Downloaded for Offline Use">
              <CheckCircle className="w-4 h-4" />
            </span>
          ) : (
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:opacity-50 flex items-center gap-1 text-xs font-medium"
              aria-label={`Download ${hymn.title} for offline use`}
              title="Download for Offline Use (Unlocks via Ad)"
            >
              {isDownloading ? <Loader2 className="w-4 h-4 animate-spin text-amber-700" /> : <CloudDownload className="w-5 h-5 text-amber-700" />}
            </button>
          )}

          {/* Favorite Button */}
          <button
            type="button"
            onClick={toggleFavorite}
            className="p-2.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 flex-shrink-0"
            aria-label={isFavorite ? `Weng ia ${hymn.title} na ki ba jied` : `Buh ia ${hymn.title} ha ki ba jied`}
            aria-pressed={isFavorite}
          >
            <Heart className={`w-5 h-5 transition-transform group-hover:scale-110 ${isFavorite ? "fill-red-600 text-red-600" : ""}`} />
          </button>
        </div>
      </div>

      {/* Hymn Title */}
      <div className="mb-4 space-y-1">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-2 pt-1 leading-snug">
          {hymn.title}
        </h3>
      </div>

      {/* Verse Snippet */}
      <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 line-clamp-2 flex-1 font-serif italic">
        &ldquo;{firstVerseSnippet}...&rdquo;
      </p>

      {/* Bottom Bar: Action Link */}
      <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs sm:text-sm text-stone-500">
        <span className={`text-[11px] font-medium px-2.5 py-1 rounded-lg ${downloaded ? 'bg-emerald-50 text-emerald-800' : 'bg-stone-100 text-stone-600'}`}>
          {downloaded ? 'Available Offline' : 'Online View'}
        </span>
        <span className="flex items-center gap-1.5 font-semibold text-amber-800 group-hover:translate-x-1 transition-transform duration-200">
          Peit Ki Kyntien <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </span>
      </div>
    </Link>
  );
}
