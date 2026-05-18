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
            <Link href="/" className="flex items-center gap-3 group inline-flex" aria-label="Ka Kot Jingrwai Home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform duration-300">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                Ka Kot Jingrwai<span className="text-amber-700">.</span>
              </span>
            </Link>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-md">
              A comprehensive digital hymnal curated to preserve and enrich worship. Dedicated to personal devotion and congregational praise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-stone-900 text-lg tracking-wide">Explore & Indexes</h3>
            <ul className="space-y-2.5 text-sm" aria-label="Footer Navigation">
              <li>
                <Link href="/" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/indexes/alphabetical" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  Alphabetical Index <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/indexes/topical" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  Topical Index <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/indexes/translators" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  Translators <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/indexes/credits" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  Credits <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  Favorites <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-800 transition-colors inline-flex items-center gap-1 group">
                  About <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Daily Verse & Inspiration */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-stone-900 text-lg tracking-wide">Daily Verse & Inspiration</h3>
            <blockquote className="bg-[#FAF9F6] p-4 rounded-xl border border-stone-200 shadow-2xs italic text-stone-700 text-sm leading-relaxed space-y-2">
              <p>&ldquo;O sing unto the LORD a new song: sing unto the LORD, all the earth. Sing unto the LORD, bless his name; shew forth his salvation from day to day.&rdquo;</p>
              <footer className="text-xs font-semibold text-amber-800 not-italic">— Psalm 96:1-2</footer>
            </blockquote>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Ka Kot Jingrwai - Balang U Khrist. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/indexes/credits" className="hover:text-stone-800 transition-colors font-medium text-amber-900">
              Developed by Eddie
            </Link>
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
