"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, BookOpen, Info } from "lucide-react";

export default function BottomTabBar() {
  const pathname = usePathname();

  const tabs = [
    { name: "Sla Kmie", href: "/", icon: Home },
    { name: "Ki Ba Jied", href: "/favorites", icon: Heart },
    { name: "Ki Rynieng", href: "/indexes/alphabetical", icon: BookOpen, matchPrefix: "/indexes" },
    { name: "Shaphang", href: "/about", icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-stone-200/80 h-16 flex items-center justify-around px-2 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-around h-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.matchPrefix 
            ? pathname.startsWith(tab.matchPrefix) 
            : pathname === tab.href;

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-200 focus:outline-none ${
                isActive 
                  ? "text-amber-700 font-semibold scale-105" 
                  : "text-stone-500 hover:text-stone-800"
              }`}
              aria-label={tab.name}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-amber-700" : "text-stone-500"}`} />
              <span className="text-[10px] tracking-tight">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
