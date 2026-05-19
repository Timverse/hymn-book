"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Bookmark, Users, Award } from "lucide-react";

export default function IndexTabs() {
  const pathname = usePathname();
  const tabs = [
    { name: "Alphabetical Index", href: "/indexes/alphabetical", icon: BookOpen },
    { name: "Topical Index", href: "/indexes/topical", icon: Bookmark },
    { name: "Translators", href: "/indexes/translators", icon: Users },
    { name: "Credits", href: "/indexes/credits", icon: Award },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-stone-200/80 mb-8 scrollbar-none animate-fadeIn">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 ${
              isActive
                ? "bg-amber-800 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon className="w-4 h-4" />
            <span>{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
