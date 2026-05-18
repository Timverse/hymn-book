"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HYMNS, Hymn } from "@/data/hymns";
import HymnCard from "@/components/HymnCard";
import { Heart, ArrowRight, Bookmark } from "lucide-react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = () => {
    try {
      const stored = localStorage.getItem("canticle_favorites");
      if (stored) {
        const favIds: string[] = JSON.parse(stored);
        const favHymns = HYMNS.filter((h) => favIds.includes(h.id));
        setFavorites(favHymns);
      } else {
        setFavorites([]);
      }
    } catch (e) {
      console.error("Failed to load favorites", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
    const handleUpdate = () => loadFavorites();
    window.addEventListener("favorites_updated", handleUpdate);
    return () => window.removeEventListener("favorites_updated", handleUpdate);
  }, []);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-800 text-xs font-semibold tracking-wide shadow-2xs">
          <Heart className="w-3.5 h-3.5 fill-red-600 text-red-600" />
          <span>Ka Thup Shimet</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          Ki Jingrwai Ba Phi Jied Tam
        </h1>
        <p className="text-stone-600 text-lg leading-relaxed">
          Ka thup shimet jong ki jingrwai mane Blei kiba ktah tam ia ka mynsiem jong phi.
        </p>
      </header>

      {/* Content Area */}
      {loading ? (
        <div className="py-20 text-center text-stone-500 text-sm">
          Dang plie ia ka thup shimet jong phi...
        </div>
      ) : favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fadeIn" role="list">
          {favorites.map((hymn) => (
            <HymnCard key={hymn.id} hymn={hymn} onFavoriteChange={loadFavorites} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-stone-200/80 rounded-3xl p-12 sm:p-16 text-center max-w-xl mx-auto space-y-6 shadow-xs animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-400 flex items-center justify-center mx-auto shadow-2xs">
            <Bookmark className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-stone-900">Ym Pat Don Jingrwai Ba La Jied</h3>
            <p className="text-stone-500 text-sm leading-relaxed max-w-md mx-auto">
              Phim pat shym la buh jingrwai ha ka thup shimet jong phi. Shon ia u dak dohnud ha kano kano ka jingrwai ban kynshew hangne na bynta ka jingmane.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Peit Ia Ki Jingrwai</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
