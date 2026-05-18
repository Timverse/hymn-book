"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Search, Heart, Menu, X, Info, Home } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Sla Kmie", href: "/", icon: Home },
    { name: "Ki Ba Jied", href: "/favorites", icon: Heart },
    { name: "Shaphang", href: "/about", icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/85 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded-lg p-1"
            aria-label="Ka Kot Jingrwai Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                Ka Kot Jingrwai<span className="text-amber-700">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium -mt-1">
                Balang U Khrist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-amber-100/80 text-amber-900 shadow-sm shadow-amber-900/5"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-700" : "text-stone-500"}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/?focus=search"
              className="flex items-center gap-2 bg-stone-100 hover:bg-stone-200/80 text-stone-600 hover:text-stone-900 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border border-stone-200/60 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-600"
              aria-label="Wad Jingrwai"
            >
              <Search className="w-4 h-4 text-stone-500" />
              <span className="hidden lg:inline">Wad Jingrwai...</span>
              <kbd className="hidden lg:inline-block px-2 py-0.5 text-xs font-mono bg-white border border-stone-300 rounded text-stone-500 shadow-2xs">
                ⌘K
              </kbd>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <Link 
              href="/?focus=search" 
              className="p-2.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200/80 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-stone-200 animate-fadeIn px-4 pt-2 pb-6 shadow-xl">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-amber-100 text-amber-900 font-semibold shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-amber-700" : "text-stone-500"}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
