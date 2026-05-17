import React from "react";
import Link from "next/link";
import { BookOpen, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4F3EE] border-t border-stone-200/80 text-stone-600 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex" aria-label="Canticle Home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform duration-300">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                Canticle<span className="text-amber-700">.</span>
              </span>
            </Link>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-md">
              A beautifully curated digital hymnal dedicated to preserving timeless Christian hymns. Crafted with elegance and readability to enrich your personal and communal worship.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-500 bg-stone-200/60 px-3 py-2 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Fully Optimized & Fast Loading (Under 2s)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-stone-900 text-lg tracking-wide">Explore</h3>
            <ul className="space-y-2.5 text-sm" aria-label="Footer Navigation">
              <li>
                <Link href="/" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  Favorites <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  About Us <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Daily Verse & Inspiration */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-stone-900 text-lg tracking-wide">Daily Inspiration</h3>
            <blockquote className="bg-[#FAF9F6] p-4 rounded-xl border border-stone-200 shadow-2xs italic text-stone-700 text-sm leading-relaxed space-y-2">
              <p>&ldquo;Sing to the Lord a new song; sing to the Lord, all the earth. Sing to the Lord, praise his name; proclaim his salvation day after day.&rdquo;</p>
              <footer className="text-xs font-semibold text-amber-800 not-italic">— Psalm 96:1-2</footer>
            </blockquote>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Canticle Hymnal Archive. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-stone-800 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-stone-800 transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-red-600 fill-red-600" /> for worship
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
