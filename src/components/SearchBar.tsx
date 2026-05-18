"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

function SearchBarInput({ searchQuery, onSearchChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const focusParam = searchParams.get("focus");

  useEffect(() => {
    if (focusParam === "search" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focusParam]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative flex items-center">
      <Search className="absolute left-5 w-5 h-5 text-stone-400 pointer-events-none" />
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Wad da ka kyrteng, u nombar, lane ki kyntien... (Shon ⌘K)"
        className="w-full pl-13 pr-12 py-4 bg-white border border-stone-200/80 rounded-2xl text-stone-800 placeholder-stone-400 text-base shadow-lg shadow-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-200"
        aria-label="Wad jingrwai"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => {
            onSearchChange("");
            inputRef.current?.focus();
          }}
          className="absolute right-4 p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600"
          aria-label="Pynkhuid ia ka jingwad"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Suspense fallback={
        <div className="relative flex items-center">
          <Search className="absolute left-5 w-5 h-5 text-stone-300 pointer-events-none" />
          <input
            type="text"
            disabled
            placeholder="Dang plie ia ka jingwad..."
            className="w-full pl-13 pr-12 py-4 bg-white border border-stone-200/80 rounded-2xl text-stone-400 text-base shadow-lg shadow-stone-100 focus:outline-none"
          />
        </div>
      }>
        <SearchBarInput searchQuery={searchQuery} onSearchChange={onSearchChange} />
      </Suspense>
      <div className="mt-2.5 flex items-center justify-center gap-2 text-xs text-stone-500">
        <span>Tip: Wad ia u nombar kum <strong className="text-stone-700">#1</strong> lane ki kyntien kum <strong className="text-stone-700">&ldquo;Jingieid&rdquo;</strong></span>
      </div>
    </div>
  );
}
