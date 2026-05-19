"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Search } from "lucide-react";
import { useAppNetwork } from "@/context/NetworkContext";

export default function TopAppBar() {
  const { isOnline } = useAppNetwork();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80 h-16 transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* App Title / Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-lg p-1"
          aria-label="The Hymn Book Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform duration-300">
            <BookOpen className="w-4 h-4 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
              Ka Kot Jingrwai<span className="text-amber-700">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-stone-500 font-medium -mt-1">
              Church of Christ
            </span>
          </div>
        </Link>

        {/* Right Actions: Network Badge & Search */}
        <div className="flex items-center gap-3">
          {/* Network Status Pill */}
          {isOnline ? (
            <div className="bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium shadow-2xs transition-all animate-fadeIn">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="hidden sm:inline">Online Mode</span>
              <span className="sm:hidden">Online</span>
            </div>
          ) : (
            <div className="bg-rose-100/80 border border-rose-200 text-rose-800 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium shadow-2xs transition-all animate-fadeIn">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
              <span className="hidden sm:inline">Offline Mode</span>
              <span className="sm:hidden">Offline</span>
            </div>
          )}

          {/* Search Icon */}
          <Link 
            href="/?focus=search" 
            className="p-2 rounded-full bg-stone-100/80 border border-stone-200/60 text-stone-700 hover:bg-stone-200/80 transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-amber-600"
            aria-label="Search Hymns"
          >
            <Search className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
